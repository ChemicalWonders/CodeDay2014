
//ENEMY CLASS
//ADDS ITSELF TO THE STAGE
function Enemy(stage, x,y, direction)
{
		var texture = PIXI.Texture.fromImage("static/chicken.png");
		this.object = new PIXI.Sprite(texture);
		this.object.position.x = x;
		this.object.position.y = y;
		this.object.anchor.x = 0;
		this.object.anchor.y = 0;
		this.direction = direction;
		this.stage = stage;
		//assign arbitrary hit area
		this.object.hitArea = new PIXI.Rectangle(0,0,this.object.width,this.object.height);

		Enemy.allEnemies.push(this);
		this.addToStage(stage);
		this.shootTimer = Date.now();
		this.health = 1;
		this.damageTimer = Date.now();
}


Enemy.prototype.run = function()
{
		//need this function for all types of enemies
		//try to find the plaayer

		//just move him for now
		//patrol around origional area

		if(this.health > 0)
		{

						//move toward player
						if(hero.sprite.position.x < this.object.position.x)
						{
								//move left
								this.direction = -1;
								this.object.position.x -= 1;
						}
						else
						{
								this.direction = 1;
								this.object.position.x += 1;
						}
				//make gravity
				if(this.object.position.y < 500)
				{
						//this.object.position.y += 0.005;
				}
				if(this.getDistanceFrom(hero) < 400){
						//shoot at player - do later
						if(this.shootTimer < Date.now()) {
								this.fireProjectile();
								this.shootTimer = Date.now() + 1000;
						}
				}
				else
				{

						if(hero.sprite.position.y > this.object.position.y)
						{
								//move left
								this.object.position.y += 4;
						}
						else

						{
								this.object.position.y -= 4;
						}
				}

				if(this.object.position.y < 500)
				{
						this.object.position.y += 4;
				}

				if(this.collisionPlayer(this.object.position.x, this.object.position.y))
				{
					if(this.damageTimer < Date.now()){
						hero.damage();
						this.damageTimer = Date.now() + 1000;
					}
				}
		}
		else
		{
				//kill
				//remove from the list
				var t = Enemy.allEnemies.indexOf(this);
				if(t != -1)
						Enemy.allEnemies.splice(t, 1);

				var texture = PIXI.Texture.fromImage("static/gore.png");
				var gore = new PIXI.Sprite(texture);
				this.object.visible = false;
				delete this;
		}
}

Enemy.prototype.damage = function(){
	this.health -= 1;
	var chickenDeath = new buzz.sound("static/chickencall.wav");
	chickenDeath.play();
}


Enemy.prototype.collisionPlayer = function(x, y)
{
		return ((x >= hero.sprite.position.x && x <= hero.sprite.position.x+Math.abs(hero.sprite.width))
						&& (y >= hero.sprite.position.y && y <= hero.sprite.position.y+Math.abs(hero.sprite.height)));
}

Enemy.collision_test = function()
{
	return Enemy.allEnemies.some(function(enemy){
		return enemy.collisionPlayer(enemy.object.position.x, enemy.object.position.y);
	});
}



Enemy.prototype.addToStage = function(stage)
{
		stage.addChild(this.object);
}


Enemy.prototype.getDistanceFrom = function(player)
{
		//get distance from using formulas
		var distX = player.sprite.position.x - this.object.position.x;
		var distY = player.sprite.position.y - this.object.position.y;
		var ret = Math.sqrt(distX*distX + distY*distY);
		return ret;
}

Enemy.prototype.bounding_box = function() {
    return new PIXI.Rectangle(this.object.position.x, this.object.position.y, this.object.width, this.object.height);
};

Enemy.prototype.fireProjectile = function()
{
		//create a projectile and add that projectil to the objectmanager
		var proj = new Projectile(this.stage,
															this.object.position.x+10,
															this.object.position.y+10,
															5,
															this.direction, 1000, false);
}


Enemy.prototype.getPointInsideBox = function(x, y)
{
		return ((x > this.object.position.x && x < this.object.position.x+Math.abs(this.object.width))
						&& (y > this.object.position.y && y < this.object.position.y+Math.abs(this.object.height)));

}

Enemy.prototype.flipSprite = function()
{
		this.direction *= -1;
		this.sprite.scale.x *= -1;
		return this;
}

Enemy.allEnemies = new Array();
