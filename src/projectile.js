//PROJECTIEL CLASS
//DO THIS

function Projectile(stage, x, y, speed, direction, lifetime)
{
		//initialize values
		var texture = PIXI.Texture.fromImage("static/ball.jpg");
		this.object = new PIXI.Sprite(texture);
		this.object.position.x = x;
		this.object.position.y = y;
		this.speed = speed;
		this.direction = direction;
		this.object.hitArea = new PIXI.Rectangle(0,0,1,1);
		this.stage = stage;
		Projectile.allProjectiles.push(this);
		this.addToStage(stage);
		this.endTimer = Date.now() + lifetime;
}


Projectile.prototype.run = function()
{
		//shoot in the direction that we were pointing to
		if(this.endTimer > Date.now())
		{
				if(this.direction == -1){
						this.object.position.x += this.speed;
				}
				else if(this.direction == 1){
						this.object.position.x -= this.speed;
				}
				//check for the damaages
				for(i = 0; i < Enemy.allEnemies.length; i++)
				{
						if(Enemy.allEnemies[i].getPointInsideBox(this.object.position.x,
																										 this.object.position.y))
						{
								//hit enemy
								Enemy.allEnemies[i].damage(1);
								this.drop();
						}
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


