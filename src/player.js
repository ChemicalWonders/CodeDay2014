// Generated by CoffeeScript 1.6.3
var Player, ground_line, hero, hero_texture;

ground_line = 500;

Player = (function() {
  Player.life = 3;

  function Player(sprite) {
    this.sprite = sprite;
    sprite.anchor.x = 0.01;
    sprite.anchor.y = 0.01;
    this.alive = true;
    this.health = 6;
    this.velocity_x = 0;
    this.velocity_y = 0;
    this.direction = 1;
  }

  Player.prototype.flip_sprite = function() {
    this.direction *= -1;
    this.sprite.scale.x *= -1;
    return this;
  };

  Player.prototype.fall = function() {
    if (this.velocity_y < 0 && this.sprite.position.y > ground_line) {
      this.sprite.position.y = -1;
    }
    if (this.velocity_y < 0) {
      return this.velocity_y += 1;
    }
  };

  Player.prototype.move_character = function(dx) {
    if (dx == null) {
      dx = 0;
    }
    this.sprite.position.x += dx;
    this.fall();
    return this;
  };

  Player.prototype.collision_test_enemy = function(enemy) {
    var b1, b2;
    b1 = this.my_bounding_box;
    b2 = enemy.bounding_box();
    return !(b1.x < b2.x + b2.width && b1.x + b1.width > b2.x && b1.y < b2.y + b2.height && b1.y + b1.height > b2.y);
  };

  Player.prototype.collison_test = function(enemy_list) {
    this.my_bounding_box = this.bounding_box();
    if (enemy_list != null) {
      return enemy_list.some(function(enemy) {
        return enemy.collision_test_enemy;
      });
    }
  };

  Player.prototype.update = function(enemy_list) {
    if (this.health <= 0) {
      this.alive = false;
    } else {
      if (this.collison_test(enemy_list)) {
        this.health -= 1;
      }
      this.move_character(this.velocity_x);
      if (this.direction === 0 && this.velocity_x < 0) {
        this.flip_sprite();
      }
      if (this.direction === 0 && this.velocity_x > 0) {
        this.flip_sprite();
      }
      this.velocity_x = 0;
      this.velocity_y = 0;
    }
    return this;
  };

  Player.prototype.bounding_box = function() {
    return new PIXI.Rectangle(this.sprite.position.x, this.sprite.position.y, this.sprite.width, this.sprite.height);
  };

  return Player;

})();

hero_texture = PIXI.Texture.fromImage('static/bunny.png');

hero = new Player(new PIXI.Sprite(hero_texture));
