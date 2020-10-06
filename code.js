var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----



  var ball=createSprite(20,200,20,20);
  var target=createSprite(390,200,20,20);
var paddle1=createSprite(80,200,15,120);
var paddle2=createSprite(135,200,15,120);
var paddle3=createSprite(190,200,15,120);
var paddle4=createSprite(250,200,15,120);
var paddle5=createSprite(300,200,15,120);

paddle1.velocityY=9;
 paddle2.velocityY=7;
  paddle3.velocityY=11;
  paddle4.velocityY=15;
    paddle5.velocityY=-8;
    
function draw() {
  background("yellow");
  
  createEdgeSprites();
  
  paddle1.bounceOff(edges);
 paddle2.bounceOff(edges);
 paddle3.bounceOff(edges);
paddle4.bounceOff(edges);
  paddle5.bounceOff(edges);
  
  if(keyDown(LEFT_ARROW)){
   ball.x = ball.x-4;
  }
  if(keyDown(RIGHT_ARROW)){
    ball.x = ball.x+4;
  }
  if(keyDown("SPACE")){
    ball.y = ball.y-4;
  }
  if(keyDown(DOWN_ARROW)){
    ball.y = ball.y+4;
  }
  
  if(ball.isTouching(target)){
    text("YOU WON",200,200);
    }
    
    if(ball.isTouching(target)){
      ball.x=20;
      ball.y=200;
    }
    
  if (ball.isTouching(paddle1) || ball.isTouching(paddle2) ||ball.isTouching(paddle3) ||ball.isTouching(paddle4) || ball.isTouching(paddle5)){
    ball.x=20;
    ball.y=200;
  }
  drawSprites();
  

 

 }
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
