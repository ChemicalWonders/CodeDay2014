//player constructor
function Player(x, y)
{
		//set default parameters if there are none
		
		var texture = PIXI.Texture.fromImage("static/bunny.png");
		this.object = new PIXI.Sprite(texture);
		this.object.position.x = 0;
		this.object.position.y = 0;
}


Player.prototype.run = function()
{
		//player run function!!!!
		//all object files should have something like this
		//player hsould be able to move
}


//add the player to the rendering stage
Player.prototype.addToStage = function(stage)
{
		stage.addChild(this.object);
}
