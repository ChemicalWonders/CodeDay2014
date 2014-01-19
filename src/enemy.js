
//ENEMY CLASS
//ADDS ITSELF TO THE STAGE

function Enemy(stage, x,y, direction)
{
		var texture = PIXI.Texture.fromImage("static/bunny.png");
		this.object = new PIXI.Sprite(texture);

		this.shootTimer = Date.now();
		this.object.position.x = x;
		this.object.position.y = y;
		this.direction = direction;

		this.stage = stage;
		this.health = 1;
		//assign arbitrary hit area
		this.object.hitArea = new PIXI.Rectangle(0,0,10,10);

		Enemy.allEnemies.push(this);
		this.addToStage(stage);
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
		//patrol around origional area
		if(this.health > 0)
		{
				this.object.position.x += 1;
				if(this.shootTimer < Date.now()) {
						this.fireProjectile();
						this.shootTimer = Date.now() + 1000;
				}
		}
		else
		{
				//kill
				//remove from the list
				this.object.visible = false;
				delete this;
		}
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
		//create a projectile and add that projectil to the objectmanager
		//set it on a timer
		
		var proj = new Projectile(this.stage,
															this.object.position.x,
															this.object.position.y,
															5,
															this.direction, 1000);

}

Enemy.allEnemies = new Array();
