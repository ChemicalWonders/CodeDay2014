<<<<<<< HEAD:src/game.js
var main = function(){
	var stage = new PIXI.Stage(0x066FF99);
	var canvas = document.getElementById('game-canvas');
	var renderer =   PIXI.autoDetectRenderer(canvas.width, canvas.height, canvas);
	var farTexture = PIXI.Texture.fromImage('static/bg-far.png');
	var far = new PIXI.Sprite(farTexture);
	far.position.x = 0;
	far.position.y = 0;
	if (far.renderable){
		stage.addChild(far);
		console.log("working");
	} else {
		console.log("not working");
	}
	var midTexture = PIXI.Texture.fromImage('static/bg-mid.png');
	var mid = new PIXI.Sprite(midTexture);
	mid.position.x = 0;
	mid.position.y = 128;
	stage.addChild(mid);

	var update = function(){
		renderer.render(stage);
		far.position.x -= 0.128;
		renderer.render(stage);
		requestAnimFrame(update);
	};

	requestAnimFrame(update);


	// document.body.appendChild(renderer.view);
	// requestAnimFrame(animate);
 //    // create a texture from an image path
 //    var texture = PIXI.Texture.fromImage("static/bunny.png");
 //    // create a new Sprite using the texture
 //    var bunny = new PIXI.Sprite(texture);

 //    // center the sprites anchor point
 //    bunny.anchor.x = 0.5;
 //    bunny.anchor.y = 0.5;

 //    // move the sprite t the center of the screen
 //    bunny.position.x = 200;
 //    bunny.position.y = 150;

 //    stage.addChild(bunny);
//	   requestAnimFrame(animate);
 //    function animate() {

 //        requestAnimFrame(animate);

 //        // just for fun, lets rotate mr rabbit a little
 //        bunny.rotation += 0.1;

 //        // render the stage
 //        renderer.render(stage);
 //    }
}
=======


(function(){
	var stage = new PIXI.Stage(0x066FF99);
	var renderer = PIXI.autoDetectRenderer(1500, 625);
	document.body.appendChild(renderer.view);
	requestAnimFrame(animate);

    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("static/bunny.png");
    // create a new Sprite using the texture
    var bunny = new PIXI.Sprite(texture);
		var person = new Person();
    // center the sprites anchor point
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // move the sprite t the center of the screen
    bunny.position.x = 200;
    bunny.position.y = 150;

    stage.addChild(bunny);

    function animate() {

        requestAnimFrame( animate );


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
>>>>>>> a7f4cc919128d4c675a8d8f3fefe22ff03c4cfa9:src/gameWASD.js
