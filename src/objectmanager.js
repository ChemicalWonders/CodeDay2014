function ObjectManager()
{
		this.allEnemies = new Array();
		this.allProjectiles = new Array();
}

ObjectManager.prototype.run = function()
{
		//run thru all objects
		for(i = 0; i < this.allEnemies.length; i++){
				this.allEnemies[i].run();
						
		}
		for(i = 0; i < this.allProjectiles.length; i++){
				this.allProjectiles[i].run();
		}

}

ObjectManager.prototype.addEnemy = function(enemy)
{
		this.allEnemies.push(enemy);
}

ObjectManager.prototype.addProjectile = function(projectile)
{
		this.allProjecitles.push(projecitle);
}
