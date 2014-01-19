function ObjectManager()
{
}

ObjectManager.prototype.run = function()
{
		//run thru all objects
		for(i = 0; i < Enemy.allEnemies.length; i++){
				Enemy.allEnemies[i].run();
						
		}
		for(i = 0; i < Projectile.allProjectiles.length; i++){
				Projectile.allProjectiles[i].run();
		}

}

