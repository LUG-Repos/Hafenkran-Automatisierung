using DataManager;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.FileProviders;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();


var provider = new FileExtensionContentTypeProvider();
provider.Mappings[".json"] = "application/json";
provider.Mappings[".wasm"] = "application/wasm";
provider.Mappings[".data"] = "application/octet-stream";


app.UseDefaultFiles();



app.UseStaticFiles(new StaticFileOptions
{
    ContentTypeProvider = provider
});


app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(builder.Environment.ContentRootPath, "engine")),
    RequestPath = "/engine",
    ContentTypeProvider = provider
});

app.MapGet("/", async context =>
{
    // Wir lassen "wwwroot" weg, da die Datei im Hauptverzeichnis liegt
    var path = Path.Combine(builder.Environment.ContentRootPath, "index.html");

    if (!File.Exists(path))
    {
        await context.Response.WriteAsync($"Datei nicht gefunden an: {path}");
        return;
    }

    context.Response.ContentType = "text/html";
    await context.Response.SendFileAsync(path);
});

app.MapPost("/api/data", async (HttpRequest request) =>
{
    using var reader = new StreamReader(request.Body);
    string raw = await reader.ReadToEndAsync();
    string json = raw
        .Replace("'", "\"")
        .Replace(":True", ": true")
        .Replace(":False", ": false")
        .Replace(": True", ": true")
        .Replace(": False", ": false");

    try
    {
        using var doc = JsonDocument.Parse(json);
        var r = doc.RootElement;

        Crane.pos["X"] = r.GetProperty("CraneX").GetDouble();
        Crane.pos["Y"] = r.GetProperty("CraneY").GetDouble();
        Crane.pos["Z"] = r.GetProperty("CraneZ").GetDouble();   

        TargetContainer.pos["X"] = r.GetProperty("KontainerX").GetDouble();
        TargetContainer.pos["Y"] = r.GetProperty("KontainerY").GetDouble();
        TargetContainer.pos["Z"] = r.GetProperty("KontainerZ").GetDouble();
        TargetContainer.pos["picked"] = r.GetProperty("KontainerPickedUp").GetBoolean();
        TargetContainer.pos["exist"] = r.GetProperty("KontainerExists").GetBoolean();

        Train.pos["X"] = r.GetProperty("TrainX").GetDouble();
        Train.pos["Y"] = r.GetProperty("TrainY").GetDouble();
        Train.pos["Z"] = r.GetProperty("TrainZ").GetDouble();
        Train.pos["TrainLoaded"] = r.GetProperty("TrainLoaded").GetBoolean();

        return Results.Ok();
    }
    catch (Exception ex)
    {
        Console.WriteLine("Fehler: " + ex.Message);
        Console.WriteLine("RAW: " + raw);
        return Results.BadRequest(ex.Message);
    }
});

app.MapGet("/api/getAxis", () =>
{
    return Results.Json(Crane.axis);
});

app.MapGet("/api/getPos", () =>
{
    return Results.Json(Crane.pos);
});

app.MapGet("/api/getTrainPos", () =>
{
    return Results.Json(Train.pos);
});

app.MapGet("/api/getContainerInfo", () =>
{
    return Results.Json(TargetContainer.pos);
});

app.MapPost("/api/control", async (HttpRequest request) =>
{
    using var doc = await JsonDocument.ParseAsync(request.Body);
    var root = doc.RootElement;

    Crane.axis["X"] = root.GetProperty("X").GetInt32();
    Crane.axis["Y"] = root.GetProperty("Y").GetInt32();
    Crane.axis["Z"] = root.GetProperty("Z").GetInt32();
    Crane.axis["Grab"] = root.GetProperty("Grab").GetBoolean();

    return Results.Ok();
});

app.Run();