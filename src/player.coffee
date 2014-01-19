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

	fire_projectile: (stage) ->
		new Projectile(stage, @sprite.position.x, @sprite.position.y)

	move_character: (dx = 0, dy = 0) ->
		@sprite.position.x += dx
		@fall(dy)
		this



	collision_test_enemy: (x, y) ->
		((x > @sprite.position.x and x < @sprite.position.x + @sprite.width) and
		( y  >  @sprite.position.y and y <  @sprite.position.y + @sprite.height))

	collison_test: (enemy_list) ->
		if not enemy_list?
			false
		else
			for enemy in enemy_list
				if @collision_test_enemy(enemy.object.position.x, enemy.object.position.y)
					true
		false

	update: (enemy_list) ->
		if @health <= 0
			@alive = false
		else
			console.log(@health)
			@health -= 1 if @collison_test(enemy_list)
			flip = (@direction == -1 and @velocity_x < 0) or (@direction == 1 and @velocity_x > 0)
			if flip
				@move_character(@direction * @sprite.width, 0)
				@flip_sprite()

			@move_character(@velocity_x, @velocity_y) if not flip
			@velocity_x = 0
			@velocity_y = 0
		this


hero_texture = PIXI.Texture.fromImage('static/bunny.png')
hero = new Player(new PIXI.Sprite(hero_texture))