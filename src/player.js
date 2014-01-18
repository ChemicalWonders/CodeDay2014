function Player()
{
		var texture = PIXI.Texture.fromImage("static/bunny.png");
		this.object = new PIXI.Sprite(texture);
		this.object.position.x = 0;
		this.object.position.y = 0;
}


Player.prototype.run = function()
{
		
}

Player.prototype.addToStage = function(stage)
{
		stage.addChild(this.object);
}
