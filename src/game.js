var main = function(){
	kd.LEFT.down(function() {
	  return hero.velocity_x -= 8;
	});

	kd.RIGHT.down(function() {
	  return hero.velocity_x += 8;
	});

	kd.X.down(function() {
	  return hero.velocity_y -= hero.sprite.height/2;
	});

	kd.run(function() {
		kd.tick();
	})
	var stage = new PIXI.Stage(0x66FF99);
	var canvas = document.getElementById('game-canvas');
	var renderer = PIXI.autoDetectRenderer(canvas.width, canvas.height, canvas);

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

        //file doesn't exist it still works. wat
		var midTexture = PIXI.Texture.fromImage("static/ignore.png");
		mid = new PIXI.TilingSprite(midTexture, 512, 256);
		mid.position.x = 0;
		mid.position.y = 128;
		mid.tilePosition.x = 0;
        mid.tilePosition.y = 0;
        stage.addChild(mid);
        requestAnimFrame(update);
    function update() {
		far.tilePosition.x -= 0.128;
		mid.tilePosition.x -= 0.64;
		renderer.render(stage);
        hero.update();
		objectmanager.run();
		renderer.render(stage);
  		requestAnimFrame(update);

	}
	var enemy = new Enemy(stage, 200,0,-1);
	var objectmanager = new ObjectManager();
	stage.addChild(hero.sprite);
	renderer.render(stage);


	requestAnimFrame(update);
};


