var controls = function(){

}

var main = function(){
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

	kd.LEFT.down(function() {
	  hero.velocity_x -= 8;
	});

	kd.RIGHT.down(function() {
	   hero.velocity_x += 8;
	});

	kd.X.down(function() {
	  hero.velocity_y -= hero.sprite.height/2;
	});

	kd.Z.down(function() {
	  hero.fire_projectile(stage);
	});

	kd.run(function() {
		kd.tick();
	})


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
		console.log(hero.health);
            if (hero.health <= 0) {
		      hero.alive = false;
		    } else {
		      if (Enemy.collision_test() || Projectile.collision_test()) {
		        hero.health -= 1;
		      }
		      flip = (hero.direction === -1 && hero.velocity_x < 0) || (hero.direction === 1 && hero.velocity_x > 0);
		      if (flip) {
		        hero.move_character(hero.direction * hero.sprite.width, 0);
		        hero.flip_sprite();
		        hero.move_character(-hero.direction * hero.sprite.width, 0);
		      }
		      if (!flip) {
		        hero.move_character(hero.velocity_x, hero.velocity_y);
		      }
		      hero.velocity_x = 0;
		      hero.velocity_y = 0;
		    }
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


