
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
<<<<<<< HEAD:src/gamev2.js
//		var person = new Player(0,0);
=======
	var person = new Person();
>>>>>>> origin/Mastering-WASD-and-Arrow-Keys:src/game.js
    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

<<<<<<< HEAD:src/gamev2.js
		var person = new Player(0,0);
		var objectmanager = new ObjectManager();
		var enemy = new Enemy(stage, 200,0, 1);
=======
    //Setting Interactivity
    bunny.setInteractive(true);
    bunny.buttonMode = true;


    // move the sprite t the center of the screen
    bunny.position.x = 150;
    bunny.position.y = 150;

>>>>>>> origin/Mastering-WASD-and-Arrow-Keys:src/game.js
    stage.addChild(bunny);
//		person.addToStage(stage);
		enemy.addToStage(stage);
    function animate() {

        requestAnimFrame( animate );
<<<<<<< HEAD:src/gamev2.js
				objectmanager.run();
=======
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

>>>>>>> origin/Mastering-WASD-and-Arrow-Keys:src/game.js
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
