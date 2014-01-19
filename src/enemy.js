
//ENEMY CLASS
//ADDS ITSELF TO THE STAGE
function Enemy(stage, x,y, direction)
{
		var texture = PIXI.Texture.fromImage("static/bunny.png");
		this.object = new PIXI.Sprite(texture);
		this.object.position.x = x;
		this.object.position.y = y;
		this.direction = direction;
		this.stage = stage;
		//assign arbitrary hit area
		this.object.hitArea = new PIXI.Rectangle(0,0,10,10);

		Enemy.allEnemies.push(this);
		this.addToStage(stage);
		this.shootTimer = Date.now();
		this.health = 1;
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

				//make gravity
				if(this.object.position.y < 500)
				{
						this.object.position.y += 4;
				}
				/*
				if(this.getDistanceFrom(hero) < 500){
						//shoot at player - do later
						if(this.shootTimer < Date.now()) {
								this.fireProjectile();
								this.shootTimer = Date.now() + 1000;
						}						
				}
				else
				{
						//move toward player
						if(hero.sprite.position.x < this.object.position.x)
						{
								//move left
								this.object.position.x -= 1;
						}
						else
						{
								this.object.position.x += 1;
						}
				}
				*/
				if(this.object.position.y < 500)
				{
						this.object.position.y += 4;
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

Enemy.prototype.bounding_box = function() {
    return new PIXI.Rectangle(this.object.position.x, this.object.position.y, this.object.width, this.object.height);
};

Enemy.prototype.fireProjectile = function()
{
		//create a projectile and add that projectil to the objectmanager
		var proj = new Projectile(this.stage,
															this.object.position.x+10,
															this.object.position.y+10,
															5,
															this.direction, 1000, false);
}


Enemy.prototype.getPointInsideBox = function(x, y)
{
		return ((x > this.object.position.x && x < this.object.position.x+this.object.hitArea.width)
						&& (y > this.object.position.y && y < this.object.position.y+this.object.hitArea.height));

}


Enemy.allEnemies = new Array();
