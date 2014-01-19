function ObjectManager()
{
		this.allEnemies = new Array();
		
}

ObjectManager.prototype.run = function()
{
		for(i = 0; i < this.allEnemies.length; i++){
						this.allEnemies[i].run();
						
						}

}

ObjectManager.prototype.addEnemy = function(enemy)
{
		this.allEnemies.push(enemy);
}
