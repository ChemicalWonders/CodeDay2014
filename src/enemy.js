function Enemy(x,y)
{
		var texture = PIXI.Texture.fromImage("static/bunny.png");
		this.object = new PIXI.Sprite(texture);
		this.object.position.x = x;
		this.object.position.y = y;
		
}


Enemy.prototype.run = function(player)
{
		//need this function for all types of enemies
		//try to find the plaayer
		
}

Enemy.prototype.addToStage = function(stage)
{
		stage.addChild(this.object);
}

Enemy.prototype.getDistanceFrom = function(player)
{
		
}
