var controls = function(){

}

<<<<<<< HEAD
	kd.X.down(function() {
	  return hero.velocity_y -= hero.sprite.height/2;
	});

	kd.run(function() {
		kd.tick();
	})

    // Sets up stage, canvas and renderer
=======
var main = function(){
>>>>>>> 68a3ea8fbb8cc9225e70f9a42f2ae63e0187a41a
	var stage = new PIXI.Stage(0x66FF99);
	var canvas = document.getElementById('game-canvas');
	var renderer = PIXI.autoDetectRenderer(canvas.width, canvas.height, canvas);
	
    // Sets up background

	stage.addChild(hero.sprite);
	renderer.render(stage);

	var farTexture = PIXI.Texture.fromImage("static/cave-background.jpg");	
		far = new PIXI.TilingSprite(farTexture, 1300, 650);
		far.position.x = 0;
		far.position.y = 0;
		far.tilePosition.x = 0;
		far.tilePosition.y = 0;
		stage.addChild(far);

<<<<<<< HEAD
        hero.update();
=======
	kd.LEFT.down(function() {
	  hero.velocity_x -= 8;
	});

	kd.RIGHT.down(function() {
	   hero.velocity_x += 8;
	});

	kd.X.down(function() {
	  hero.velocity_y -= hero.sprite.height;
	});

	kd.Z.down(function() {
	  hero.fire_projectile(stage);
	});

	kd.run(function() {
		kd.tick();
	})


		hero.update();
>>>>>>> 68a3ea8fbb8cc9225e70f9a42f2ae63e0187a41a

        //file doesn't exist it still works. wat
		var midTexture = PIXI.Texture.fromImage("static/ignore.png");
		mid = new PIXI.TilingSprite(midTexture, 512, 256);
		mid.position.x = 0;
		mid.position.y = 128;
		mid.tilePosition.x = 0;
        mid.tilePosition.y = 0;
        stage.addChild(mid);

    // Rectangle block 
    var rectBlock = PIXI.Rectangle(0, 600, 1300, 50);
    
    // Tiles/Platforms texture
    var platTexture = PIXI.Texture.fromImage("static/stoneBlock.jpg");
        plat = new PIXI.TilingSprite(platTexture, 1300, 50);
        plat.position.x = 0;
        plat.position.y = 600;
        plat.tilePosition.x = 0;
        plat.tilePosition.y = 0;
        stage.addChild(plat);

        requestAnimFrame(update);

    // Update Function
    function update() {
		far.tilePosition.x -= 0.128;
		mid.tilePosition.x -= 0.64;
        plat.tilePosition.x -= 0.128;
		renderer.render(stage);
		console.log(hero.health);
		objectmanager.run();
		hero.update();
		renderer.render(stage);
  		requestAnimFrame(update);

	}
	var enemy = new Enemy(stage, 200,0,-1);
	var objectmanager = new ObjectManager();
	stage.addChild(hero.sprite);
	renderer.render(stage);


	requestAnimFrame(update);
};


