<<<<<<< HEAD
var main = function(){
	kd.LEFT.down(function() {
	  return hero.velocity_x -= 5;
	});

	kd.RIGHT.down(function() {
	  return hero.velocity_x += 5;
	});

	kd.X.down(function() {
	  return hero.velocity_y -= 5;
	});

	kd.run(function() {
		kd.tick();
	})
	var stage = new PIXI.Stage(0x66FF99);
	var canvas = document.getElementById('game-canvas');
	var renderer = PIXI.autoDetectRenderer(canvas.width, canvas.height, canvas);
	stage.addChild(hero.sprite);
	renderer.render(stage);

	var update = function(){

		hero.update();
		renderer.render(stage);
  		requestAnimFrame(update);
	}

	requestAnimFrame(update);
};
=======


(function(){
    var interactive = true;
	var stage = new PIXI.Stage(0x066FF88, interactive);
	var renderer = PIXI.autoDetectRenderer(1400, 1000);

	document.body.appendChild(renderer.view);
	requestAnimFrame(animate);

    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("static/bunny.png.jpg");
    var texture = PIXI.Texture.fromImage("static/bunny2.png.jpg");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);
	var person = new Person();
    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    //Setting Interactivity
    bunny.setInteractive(true);
    bunny.buttonMode = true;


    // move the sprite t the center of the screen
    bunny.position.x = 150;
    bunny.position.y = 150;

    stage.addChild(bunny);

    function animate() {

        requestAnimFrame( animate );
.

        bunny.click = function(mouseData){
           console.log("CLICK!");
           if (bunny.alpha){
           bunny.alpha = 0;
            }
            else {
                bunny.alpha = 1;
            }
        }

        bunny.mouseOver = function(mouseData){

        }

        document.addEventListener('keydown',function(event){
            if(event.keyCode == 37 || event.keyCode == 65) {
                bunny.position.x -= 0.005;
            }

            if (event.keyCode == 39 || event.keyCode == 68){
                bunny.position.x += 0.005;
            }

            if (event.keyCode == 40 || event.keyCode == 83)
                bunny.position.y +=0.005;

            if (event.keyCode == 38 || event.keyCode == 87)
                bunny.position.y -=0.005;
        });

        // render the stage
        renderer.render(stage);
    }
    animate();
})();
>>>>>>> 85e7b8ce370eb3f3024934f047bceebb6bc9b6bb
