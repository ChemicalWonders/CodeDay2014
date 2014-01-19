//PROJECTIEL CLASS
//DO THIS

function Projectile(stage, x, y, speed, direction)
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
}


Projectile.prototype.run = function()
{
		//shoot in the direction that we were pointing to
		this.object.position.x += this.speed;
}

Projectile.prototype.addToStage = function(stage)
{
		stage.addChild(this.object);
}

Projectile.allProjectiles = new Array();


