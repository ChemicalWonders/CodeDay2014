function ObjectManager()
{
}

// where obj1 is either a Player, Enemy or Projectile
var collision_test = function(obj1, obj2) {
    var b1, b2;
    b1 = obj1.bounding_box();
    b2 = obj2.bounding_box();
    return !(b1.x < b2.x + b2.width && b1.x + b1.width > b2.x && b1.y < b2.y + b2.height && b1.y + b1.height > b2.y);
};

ObjectManager.prototype.run = function(stage)
{
    //run thru all objects
    for(var i = 0; i < Enemy.allEnemies.length; i++){
        Enemy.allEnemies[i].run();
    }
    for(var i = 0; i < Projectile.allProjectiles.length; i++)
    {
        Projectile.allProjectiles[i].run();

    }
        if(Enemy.allEnemies.length < 5)
        {
                new Enemy(stage, (Math.random() * 1400) * -1, 500,-1);
                new Enemy(stage, (Math.random() * 1400+800) , 500,-1);
        }
}