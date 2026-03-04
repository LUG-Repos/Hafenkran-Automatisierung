gdjs._50Code = {};
gdjs._50Code.localVariables = [];
gdjs._50Code.idToCallbackMap = new Map();
gdjs._50Code.GDSmallGreenButtonObjects1= [];
gdjs._50Code.GDSmallGreenButtonObjects2= [];


gdjs._50Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenButton"), gdjs._50Code.GDSmallGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._50Code.GDSmallGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs._50Code.GDSmallGreenButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs._50Code.GDSmallGreenButtonObjects1[k] = gdjs._50Code.GDSmallGreenButtonObjects1[i];
        ++k;
    }
}
gdjs._50Code.GDSmallGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Unbenannte Szene", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._50Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._50Code.GDSmallGreenButtonObjects1.length = 0;
gdjs._50Code.GDSmallGreenButtonObjects2.length = 0;

gdjs._50Code.eventsList0(runtimeScene);
gdjs._50Code.GDSmallGreenButtonObjects1.length = 0;
gdjs._50Code.GDSmallGreenButtonObjects2.length = 0;


return;

}

gdjs['_50Code'] = gdjs._50Code;
