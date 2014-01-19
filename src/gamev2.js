
(function(){
	var stage = new PIXI.Stage(0x066FF99);
	var renderer = PIXI.autoDetectRenderer(1500, 625);
	document.body.appendChild(renderer.view);
	requestAnimFrame(animate);

    // create a texture from an image path
    var texture = PIXI.Texture.fromImage("static/bunny.png");

		var person = new Player(0,0);
		var objectmanager = new ObjectManager();
		var enemy = new Enemy(stage, 200,0);


		person.addToStage(stage);
		enemy.addToStage(stage);
    function animate() {

        requestAnimFrame( animate );
				objectmanager.run();
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
