//PROJECTIEL CLASS
//DO THIS

function Projectile(stage, x, y, speed, direction, lifetime, isplayer)
{
		//initialize values
		var texture = PIXI.Texture.fromImage("static/ball.png");
		this.object = new PIXI.Sprite(texture);
		this.object.position.x = x;
		this.object.position.y = y;
		this.speed = speed;
		this.yaw = (Math.random()*4)-2;
		this.direction = direction;
		this.object.hitArea = new PIXI.Rectangle(0,0,1,1);
		this.stage = stage;
		Projectile.allProjectiles.push(this);
		this.addToStage(stage);
		this.endTimer = Date.now() + lifetime;

		this.isPlayer = isplayer;

}


Projectile.prototype.run = function()
{
		//shoot in the direction that we were pointing to
		var hit = false;
		if(this.endTimer > Date.now())
		{
			this.object.position.x += this.speed * this.direction;
				this.object.position.y += this.yaw;
				//check for the damaages
				if(this.isPlayer)
				{

						for(var i = 0; i < Enemy.allEnemies.length; i++)
						{
								if(Enemy.allEnemies[i].getPointInsideBox(this.object.position.x, this.object.position.y))
								{
										//hit enemy
										hit = true;
										Enemy.allEnemies[i].damage(1);
										this.drop();
								}
						}

				}
				else
				{
						//damage the player
						if(this.collisionPlayer(this.object.position.x, this.object.position.y))
						{
								//hit = true;
								hero.damage()
								this.drop();
						}
				}
				if (hit){
					this.drop();
				}
		}
		else
		{
				this.drop();
		}
}
Projectile.prototype.addToStage = function(stage)
{
		stage.addChild(this.object);
}

Projectile.prototype.bounding_box = function() {
    return new PIXI.Rectangle(this.object.position.x, this.object.position.y, this.object.width, this.object.height);
};

Projectile.prototype.collisionPlayer = function(x, y)
{
		return ((x >= hero.sprite.position.x && x <= Math.abs(hero.sprite.position.x+Math.abs(hero.sprite.width)))
				&& (y >= hero.sprite.position.y && y <= Math.abs(hero.sprite.position.y+hero.sprite.height)));
}

Projectile.prototype.collisionEnemy = function(enemy, x, y)
{
		return ((x >= enemy.object.position.x && x <= Math.abs(enemy.object.position.x+enemy.object.width))
						&& (y >= enemy.object.position.y && y <= Math.abs(enemy.object.position.y+enemy.object.height)));
}


Projectile.collision_test = function()
{
	return Projectile.allProjectiles.some(function(projectile){
		return projectile.collisionPlayer(projectile.object.position.x, projectile.object.position.y);
	});
}


//self deletion function
Projectile.prototype.drop = function()
{

		//kill
		//make sure we delete from the array
		var i = Projectile.allProjectiles.indexOf(this);
		if( i != -1 )
		{
				Projectile.allProjectiles.splice(i,1);
		}
		this.object.visible = false;
		delete this;
}

Projectile.allProjectiles = new Array();
