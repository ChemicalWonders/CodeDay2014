function Enemy(x,y)
{
		var texture = PIXI.Texture.fromImage("static/bunny.png");
		this.object = new PIXI.Sprite(texture);
		this.object.position.x = x;
		this.object.position.y = y;
		
}


Enemy.prototype.run = function()
{
		//need this function for all types of enemies
		//try to find the plaayer
/*
		if(getDistanceFrom(player) < 500){
				//shoot at player - do later
				
				}
		else
				{
						//move toward player
						
				}*/
		//just move him for now
		this.object.position.x += 1;
}

Enemy.prototype.addToStage = function(stage)
{
		stage.addChild(this.object);
}

Enemy.prototype.getDistanceFrom = function(player)
{
		//get distance from using formulas
		var distX = player.object.position.x - this.object.position.x;
		var distY = player.object.position.y - this.object.position.y;
		var ret = Math.sqrt(distX*distX + distY*distY);
		return ret;
}

Enemy.prototype.fireProjectile = function()
{
		
}

