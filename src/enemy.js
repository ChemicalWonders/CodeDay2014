
//ENEMY CLASS
//ADDS ITSELF TO THE STAGE
<<<<<<< HEAD
function Enemy(stage, x,y)
=======
function Enemy(stage, x,y, direction)
>>>>>>> origin/master
{
		var texture = PIXI.Texture.fromImage("static/bunny.png");
		this.object = new PIXI.Sprite(texture);
		this.object.position.x = x;
		this.object.position.y = y;
<<<<<<< HEAD
=======
		this.direction = direction;
>>>>>>> origin/master
		this.stage = stage;
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

		this.object.position.x += 1;
		this.fireProjectile();
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
		var proj = new Projectile(this.stage,
															this.object.position.x,
															this.object.position.y,
															10,
<<<<<<< HEAD
															0);
=======
															this.direction);
>>>>>>> origin/master
}

Enemy.allEnemies = new Array();