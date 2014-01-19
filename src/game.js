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
	var enemy = new Enemy(stage, 200,0,-1);
	var objectmanager = new ObjectManager();
	stage.addChild(hero.sprite);
	renderer.render(stage);

	var update = function(){

		hero.update();
			objectmanager.run();
		renderer.render(stage);
  		requestAnimFrame(update);
	}

	requestAnimFrame(update);
};
