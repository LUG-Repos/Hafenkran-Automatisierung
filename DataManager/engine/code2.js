gdjs._51Code = {};
gdjs._51Code.localVariables = [];
gdjs._51Code.idToCallbackMap = new Map();
gdjs._51Code.GDNewTextObjects1= [];
gdjs._51Code.GDNewTextObjects2= [];
gdjs._51Code.GDNewSpriteObjects1= [];
gdjs._51Code.GDNewSpriteObjects2= [];
gdjs._51Code.GDNewText2Objects1= [];
gdjs._51Code.GDNewText2Objects2= [];
gdjs._51Code.GDSmallGreenButtonObjects1= [];
gdjs._51Code.GDSmallGreenButtonObjects2= [];


gdjs._51Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenButton"), gdjs._51Code.GDSmallGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDSmallGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs._51Code.GDSmallGreenButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDSmallGreenButtonObjects1[k] = gdjs._51Code.GDSmallGreenButtonObjects1[i];
        ++k;
    }
}
gdjs._51Code.GDSmallGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Unbenannte Szene", false);
}
}

}


};

gdjs._51Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._51Code.GDNewTextObjects1.length = 0;
gdjs._51Code.GDNewTextObjects2.length = 0;
gdjs._51Code.GDNewSpriteObjects1.length = 0;
gdjs._51Code.GDNewSpriteObjects2.length = 0;
gdjs._51Code.GDNewText2Objects1.length = 0;
gdjs._51Code.GDNewText2Objects2.length = 0;
gdjs._51Code.GDSmallGreenButtonObjects1.length = 0;
gdjs._51Code.GDSmallGreenButtonObjects2.length = 0;

gdjs._51Code.eventsList0(runtimeScene);
gdjs._51Code.GDNewTextObjects1.length = 0;
gdjs._51Code.GDNewTextObjects2.length = 0;
gdjs._51Code.GDNewSpriteObjects1.length = 0;
gdjs._51Code.GDNewSpriteObjects2.length = 0;
gdjs._51Code.GDNewText2Objects1.length = 0;
gdjs._51Code.GDNewText2Objects2.length = 0;
gdjs._51Code.GDSmallGreenButtonObjects1.length = 0;
gdjs._51Code.GDSmallGreenButtonObjects2.length = 0;


return;

}

gdjs['_51Code'] = gdjs._51Code;
