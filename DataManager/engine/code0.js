gdjs.Unbenannte_32SzeneCode = {};
gdjs.Unbenannte_32SzeneCode.localVariables = [];
gdjs.Unbenannte_32SzeneCode.idToCallbackMap = new Map();
gdjs.Unbenannte_32SzeneCode.GDNewSpriteObjects1= [];
gdjs.Unbenannte_32SzeneCode.GDNewSpriteObjects2= [];
gdjs.Unbenannte_32SzeneCode.GDNewSpriteObjects3= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite2Objects1= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite2Objects2= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite2Objects3= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects1= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects2= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects3= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects2= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects3= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite5Objects1= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite5Objects2= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite5Objects3= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite6Objects1= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite6Objects2= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite6Objects3= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects2= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects3= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite8Objects1= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite8Objects2= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite8Objects3= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects2= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects3= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects2= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects3= [];
gdjs.Unbenannte_32SzeneCode.GDNewTextObjects1= [];
gdjs.Unbenannte_32SzeneCode.GDNewTextObjects2= [];
gdjs.Unbenannte_32SzeneCode.GDNewTextObjects3= [];
gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1= [];
gdjs.Unbenannte_32SzeneCode.GDExplosionObjects2= [];
gdjs.Unbenannte_32SzeneCode.GDExplosionObjects3= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects2= [];
gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects3= [];


gdjs.Unbenannte_32SzeneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(-(1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "a"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "d"));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(-(1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "w"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "s"));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(-(1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "q"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "e"));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getChild("grap").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "g");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("grap").setBoolean(true);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "freesound_community-suitcase_click_open_sqeeeek-80500.mp3", 0.2, false, 5, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(4).getChild("grap").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "h");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("grap").setBoolean(false);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "freesound_community-suitcase_click_open_sqeeeek-80500.mp3", 0.2, false, 5, 1);
}
}

}


};gdjs.Unbenannte_32SzeneCode.mapOfGDgdjs_9546Unbenannte_959532SzeneCode_9546GDNewSprite9Objects1Objects = Hashtable.newFrom({"NewSprite9": gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1});
gdjs.Unbenannte_32SzeneCode.mapOfEmptyGDNewSprite11Objects = Hashtable.newFrom({"NewSprite11": []});
gdjs.Unbenannte_32SzeneCode.mapOfGDgdjs_9546Unbenannte_959532SzeneCode_9546GDNewSprite11Objects1Objects = Hashtable.newFrom({"NewSprite11": gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1});
gdjs.Unbenannte_32SzeneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getChild("grap").getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(4).getChild("grap").getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(2);
}
}

}


};gdjs.Unbenannte_32SzeneCode.mapOfEmptyGDNewSprite11Objects = Hashtable.newFrom({"NewSprite11": []});
gdjs.Unbenannte_32SzeneCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length;i<l;++i) {
    if ( gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[i].getY() > 710 ) {
        isConditionTrue_0 = true;
        gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[k] = gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[i];
        ++k;
    }
}
gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Explosion"), gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1);
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
}

}


};gdjs.Unbenannte_32SzeneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9627620);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(12).add(1);
}
}

}


};gdjs.Unbenannte_32SzeneCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length;i<l;++i) {
    if ( gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[i].getX() > 5000 ) {
        isConditionTrue_0 = true;
        gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[k] = gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[i];
        ++k;
    }
}
gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1 */
/* Reuse gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1 */
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("grap").setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("picked").setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("vorhanden").setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Loaded").setBoolean(false);
}

{ //Subevents
gdjs.Unbenannte_32SzeneCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Unbenannte_32SzeneCode.mapOfEmptyGDNewSprite10Objects = Hashtable.newFrom({"NewSprite10": []});
gdjs.Unbenannte_32SzeneCode.mapOfGDgdjs_9546Unbenannte_959532SzeneCode_9546GDNewSprite10Objects1Objects = Hashtable.newFrom({"NewSprite10": gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1});
gdjs.Unbenannte_32SzeneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Explosion"), gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite10"), gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1);
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild("target").setNumber((( gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1.length === 0 ) ? 0 :gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1[0].getPointX("")));
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "deborah_wong-fog-horn-and-gulls-326217.mp3", true, 10, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(10).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Unbenannte_32SzeneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Unbenannte_32SzeneCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1);
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite2Objects1[i].addPolarForce(0, 20, 0);
}
for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1[i].addPolarForce(0, 20, 0);
}
for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects1[i].addPolarForce(0, 20, 0);
}
for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1[i].addPolarForce(0, 20, 0);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "freesound_community-electric-hoist-65902.mp3", 0.1, false, 1, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == -(1));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Unbenannte_32SzeneCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1);
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite2Objects1[i].addPolarForce(0, -(20), 0);
}
for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1[i].addPolarForce(0, -(20), 0);
}
for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects1[i].addPolarForce(0, -(20), 0);
}
for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1[i].addPolarForce(0, -(20), 0);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "freesound_community-electric-hoist-65902.mp3", 0.1, false, 1, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1);
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1[i].getBehavior("Resizable").setHeight(gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1[i].getBehavior("Resizable").getHeight() + (0.33));
}
}
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1[i].addPolarForce(90, 20, 0);
}
}
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects1[i].rotate(50, runtimeScene);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "freesound_community-electric-hoist-65902.mp3", 0.1, false, 1, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == -(1));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1.length;i<l;++i) {
    if ( gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1[i].getBehavior("Resizable").getHeight() > 1 ) {
        isConditionTrue_0 = true;
        gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1[k] = gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1[i];
        ++k;
    }
}
gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1);
/* Reuse gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1 */
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1[i].getBehavior("Resizable").setHeight(gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1[i].getBehavior("Resizable").getHeight() - (0.33));
}
}
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1[i].addPolarForce(90, -(20), 0);
}
}
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects1[i].rotate(-(50), runtimeScene);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "freesound_community-electric-hoist-65902.mp3", 0.1, false, 1, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Y").add(1);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "freesound_community-electric-hoist-65902.mp3", 0.1, false, 1, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == -(1));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Y").add(-(1));
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "freesound_community-electric-hoist-65902.mp3", 0.1, false, 1, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("X").setNumber(Math.floor((( gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1.length === 0 ) ? 0 :gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1[0].getPointX(""))) - 30);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Z").setNumber(Math.floor((( gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1.length === 0 ) ? 0 :gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1[0].getPointY("")) + 20));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(5).getChild("vorhanden").getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("x").setNumber(gdjs.randomInRange(150, 350));
}
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("z").setNumber(gdjs.randomInRange(610, 700));
}
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("y").setNumber(gdjs.randomInRange(0, 300));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Unbenannte_32SzeneCode.mapOfGDgdjs_9546Unbenannte_959532SzeneCode_9546GDNewSprite9Objects1Objects, runtimeScene.getScene().getVariables().getFromIndex(5).getChild("x").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(5).getChild("z").getAsNumber(), "");
}
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("vorhanden").setBoolean(true);
}
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[i].setZOrder(103);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1);
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[i].getBehavior("Resizable").setSize(100, 50);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("x").setNumber((( gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length === 0 ) ? 0 :gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("z").setNumber((( gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length === 0 ) ? 0 :gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[0].getPointY("")));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Z").getAsNumber() > 705);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.Unbenannte_32SzeneCode.mapOfEmptyGDNewSprite11Objects) == 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1);
gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Unbenannte_32SzeneCode.mapOfGDgdjs_9546Unbenannte_959532SzeneCode_9546GDNewSprite11Objects1Objects, (( gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1.length === 0 ) ? 0 :gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1[0].getPointX("")), (( gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1.length === 0 ) ? 0 :gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1[0].getPointX("")) - 40, "");
}
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1[i].setZOrder(100);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "universfield-manx27s-cry-122258.mp3", 0.3, false, 5, 1);
}

{ //Subevents
gdjs.Unbenannte_32SzeneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() != 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite11"), gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1);
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1[i].setPosition((( gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1.length === 0 ) ? 0 :gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1[0].getPointX("")),(( gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1.length === 0 ) ? 0 :gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1[0].getPointY("")) - 20);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(4).getChild("grap").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(5);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getChild("grap").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 2);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(5);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.Unbenannte_32SzeneCode.mapOfEmptyGDNewSprite11Objects) > 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite11"), gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "universfield-the-funny-cry-of-a-man-122084.mp3", 0.8, false, 10, 1);
}
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1[i].addPolarForce(90, 200, 0);
}
}
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1[i].rotate(30, runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getChild("x").getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(4).getChild("X").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getChild("y").getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Y").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getChild("z").getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Z").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getChild("grap").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(5).getChild("grap").getAsBoolean();
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("grap").setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(4).getChild("grap").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(5).getChild("grap").getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1);
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("X").getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Z").getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("y").setNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Y").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("picked").setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(5).getChild("picked").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length;i<l;++i) {
    if ( gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[i].getX() == runtimeScene.getScene().getVariables().getFromIndex(6).getChild("x").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[k] = gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[i];
        ++k;
    }
}
gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length;i<l;++i) {
    if ( gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[i].getY() == runtimeScene.getScene().getVariables().getFromIndex(6).getChild("z").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[k] = gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[i];
        ++k;
    }
}
gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getChild("grap").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getChild("y").getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(6).getChild("y").getAsNumber());
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Loaded").setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(5).getChild("grap").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(5).getChild("picked").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getChild("grap").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Loaded").getAsBoolean();
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1);
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[i].addPolarForce(90, 150, 0);
}
}
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[i].rotate(50, runtimeScene);
}
}

{ //Subevents
gdjs.Unbenannte_32SzeneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Loaded").getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite10"), gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1);
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1[i].addPolarForce(0, 2, 1);
}
}
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1[i].addPolarForce(0, 2, 1);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "magiaz-locomotive-431687.mp3", 0.4, false, 10, 1);
}

{ //Subevents
gdjs.Unbenannte_32SzeneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite11"), gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1.length;i<l;++i) {
    if ( gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1[i].getY() > 800 ) {
        isConditionTrue_0 = true;
        gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1[k] = gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1[i];
        ++k;
    }
}
gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Explosion"), gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1);
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1[i].hide(false);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "freesound_community-explosion-47821.mp3", 0.6, false, 20, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Unbenannte_32SzeneCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewTextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("X").getAsString() + " " + runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Y").getAsString() + " " + runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Z").getAsString() + "   " + runtimeScene.getScene().getVariables().getFromIndex(5).getChild("x").getAsString() + " " + runtimeScene.getScene().getVariables().getFromIndex(5).getChild("y").getAsString() + " " + runtimeScene.getScene().getVariables().getFromIndex(5).getChild("z").getAsString() + runtimeScene.getScene().getVariables().getFromIndex(4).getChild("grap").getAsString() + runtimeScene.getScene().getVariables().getFromIndex(6).getChild("y").getAsString() + " AXIS" + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(4).getChild("grap").getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Unbenannte_32SzeneCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewTextObjects1[i].setColor("255;0;0");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(4).getChild("grap").getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.Unbenannte_32SzeneCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewTextObjects1[i].setColor("25;138;0");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Explosion"), gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1.length;i<l;++i) {
    if ( gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1[k] = gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1[i];
        ++k;
    }
}
gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1 */
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "2", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.Unbenannte_32SzeneCode.mapOfEmptyGDNewSprite10Objects) == 0;
if (isConditionTrue_0) {
gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Unbenannte_32SzeneCode.mapOfGDgdjs_9546Unbenannte_959532SzeneCode_9546GDNewSprite10Objects1Objects, -(700), 666, "");
}
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild("target").setNumber(gdjs.randomInRange(300, 450));
}
{runtimeScene.getScene().getVariables().getFromIndex(6).getChild("x").setNumber(Math.floor(runtimeScene.getScene().getVariables().getFromIndex(6).getChild("target").getAsNumber() - 263));
}
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1[i].getBehavior("Resizable").setSize(671, 67);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "magiaz-locomotive-431687.mp3", 0.4, false, 10, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite10"), gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1.length;i<l;++i) {
    if ( gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1[i].getX() < runtimeScene.getScene().getVariables().getFromIndex(6).getChild("target").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1[k] = gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1[i];
        ++k;
    }
}
gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1 */
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1[i].addPolarForce(0, 400, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite10"), gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1.length;i<l;++i) {
    if ( gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1[i].getX() >= runtimeScene.getScene().getVariables().getFromIndex(6).getChild("target").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1[k] = gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1[i];
        ++k;
    }
}
gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Loaded").getAsBoolean();
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1 */
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1[i].clearForces();
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.sendAsyncRequest("https://localhost:7264/api/data", "{" + "'CraneX' : " + runtimeScene.getScene().getVariables().getFromIndex(4).getChild("X").getAsString() + "," + "'CraneY' : " + runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Y").getAsString() + "," + "'CraneZ' : " + runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Z").getAsString() + "," + "'CraneGrab' : " + runtimeScene.getScene().getVariables().getFromIndex(4).getChild("grap").getAsString() + "," + "'KontainerX' : " + runtimeScene.getScene().getVariables().getFromIndex(5).getChild("x").getAsString() + "," + "'KontainerY' : " + runtimeScene.getScene().getVariables().getFromIndex(5).getChild("y").getAsString() + "," + "'KontainerZ' : " + runtimeScene.getScene().getVariables().getFromIndex(5).getChild("z").getAsString() + "," + "'KontainerPickedUp' : " + runtimeScene.getScene().getVariables().getFromIndex(5).getChild("picked").getAsString() + "," + "'KontainerExists' : " + runtimeScene.getScene().getVariables().getFromIndex(5).getChild("vorhanden").getAsString() + "," + "'TrainX' : " + runtimeScene.getScene().getVariables().getFromIndex(6).getChild("x").getAsString() + "," + "'TrainY' : " + runtimeScene.getScene().getVariables().getFromIndex(6).getChild("y").getAsString() + "," + "'TrainZ' : " + runtimeScene.getScene().getVariables().getFromIndex(6).getChild("z").getAsString() + "," + "'TrainLoaded' : " + runtimeScene.getScene().getVariables().getFromIndex(6).getChild("Loaded").getAsString() + "}", "POST", "", runtimeScene.getScene().getVariables().getFromIndex(7), runtimeScene.getScene().getVariables().getFromIndex(7));
}
{gdjs.evtTools.network.sendAsyncRequest("https://localhost:7264/api/getAxis", "", "GET", "", runtimeScene.getScene().getVariables().getFromIndex(8), runtimeScene.getScene().getVariables().getFromIndex(11));
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(8).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(9));
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(9).getChild("X").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(runtimeScene.getScene().getVariables().getFromIndex(9).getChild("Y").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(9).getChild("Z").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(9).getChild("Grab").getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("grap").setBoolean(true);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "freesound_community-suitcase_click_open_sqeeeek-80500.mp3", 0.2, false, 5, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(9).getChild("Grab").getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("grap").setBoolean(false);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "freesound_community-suitcase_click_open_sqeeeek-80500.mp3", 0.2, false, 5, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Z").getAsNumber() < 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getChild("X").getAsNumber() < 0);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getChild("X").getAsNumber() > 715);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Y").getAsNumber() < -(500));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Y").getAsNumber() > 500);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Explosion"), gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1);
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
{for(var i = 0, len = gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() > 9);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "3", false);
}
}

}


};

gdjs.Unbenannte_32SzeneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Unbenannte_32SzeneCode.GDNewSpriteObjects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSpriteObjects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSpriteObjects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite2Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite2Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite2Objects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite5Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite5Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite5Objects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite6Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite6Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite6Objects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite8Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite8Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite8Objects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewTextObjects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewTextObjects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewTextObjects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDExplosionObjects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDExplosionObjects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects3.length = 0;

gdjs.Unbenannte_32SzeneCode.eventsList5(runtimeScene);
gdjs.Unbenannte_32SzeneCode.GDNewSpriteObjects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSpriteObjects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSpriteObjects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite2Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite2Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite2Objects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite3Objects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite4Objects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite5Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite5Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite5Objects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite6Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite6Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite6Objects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite7Objects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite8Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite8Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite8Objects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite9Objects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite10Objects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewTextObjects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewTextObjects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewTextObjects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDExplosionObjects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDExplosionObjects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDExplosionObjects3.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects1.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects2.length = 0;
gdjs.Unbenannte_32SzeneCode.GDNewSprite11Objects3.length = 0;


return;

}

gdjs['Unbenannte_32SzeneCode'] = gdjs.Unbenannte_32SzeneCode;
