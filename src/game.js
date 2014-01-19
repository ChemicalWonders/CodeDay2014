var main = function(){
	kd.LEFT.down(function() {
	  return hero.velocity_x -= 8;
	});

	kd.RIGHT.down(function() {
	  return hero.velocity_x += 8;
	});

	kd.UP.down(function() {
	  return hero.velocity_y -= 8;
	});

	kd.DOWN.down(function() {
	  return hero.velocity_y += 8;
	});

	kd.Z.down(function() {
		hero.fire_projectile(stage);
	});

	kd.run(function() {
		kd.tick();
	})

    // Sets up stage, canvas and renderer
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

        hero.update();
    var counter = 24;
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
        hero.update();
		if(counter == 0){
			objectmanager.run(stage);
		}
		renderer.render(stage);
  		requestAnimFrame(update);
  		if(counter > 0)
  		{
  			counter -= 1;
  		} else {
  			counter = 0;
  		}

	}
	var enemy = new Enemy(stage, 200,0,-1);
	var objectmanager = new ObjectManager();
	stage.addChild(hero.sprite);
	renderer.render(stage);


	requestAnimFrame(update);
};




