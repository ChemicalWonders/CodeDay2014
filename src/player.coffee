ground_line = 500
class Player
	@life = 3

	constructor: (@sprite) ->
		sprite.anchor.x = 0
		sprite.anchor.y = 0
		sprite.position.y = ground_line - sprite.height;
		@alive = true
		@health = 6
		@velocity_x = 0
		@velocity_y = 0
		@direction  = 1 #facing right

	#If sprite turns around, flip the sprite
	flip_sprite: () ->
		@direction *= -1
		@sprite.scale.x *= -1
		this

	fall: (dy = 0) ->
		if @sprite.position.y < ground_line
			@sprite.position.y += 1
		else
			@sprite.position.y += dy
		this

	move_character: (dx = 0, dy = 0) ->
		@sprite.position.x += dx
		@fall(dy)
		this

	collision_test_enemy: (enemy) ->
		b1 = @my_bounding_box
		b2 = enemy.bounding_box()
		not(b1.x < b2.x + b2.width and b1.x + b1.width > b2.x and
		b1.y < b2.y + b2.height and b1.y + b1.height > b2.y)

	collison_test: (enemy_list) ->
		@my_bounding_box = @bounding_box()
		enemy_list.some((enemy) -> enemy.collision_test_enemy) if enemy_list?

	update: (enemy_list) ->
		if @health <= 0
			@alive = false
		else
			@health -= 1 if @collison_test(enemy_list)
			flip = (@direction == -1 and @velocity_x < 0) or (@direction == 1 and @velocity_x > 0)
			if flip
				@move_character(@direction * @sprite.width, 0)
				@flip_sprite()
				@move_character(-@direction * @sprite.width, 0)

			@move_character(@velocity_x, @velocity_y) if not flip
			@velocity_x = 0
			@velocity_y = 0
		this

	bounding_box: () ->
		new PIXI.Rectangle(@sprite.position.x, @sprite.position.y, @sprite.width, @sprite.height)

hero_texture = PIXI.Texture.fromImage('static/bunny.png')
hero = new Player(new PIXI.Sprite(hero_texture))
