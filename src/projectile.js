function Projectile(x, y, speed, direction)
{
		//initialize values
		var texture = PIXI.Texture.fromImage("static/bunny.png");
		this.object = new PIXI.Sprite(texture);
		this.object.position.x = x;
		this.object.position.y = y;
		this.speed = speed;
		this.direction = direction;
}


Projectile.prototype.run = function()
{
		//shoot in the direction that we were pointing to
		this.object.position.x += speed;
}




