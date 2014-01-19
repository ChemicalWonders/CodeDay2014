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
		@damage_timer = 0

	#If sprite turns around, flip the sprite
	flip_sprite: () ->
		@direction *= -1
		@sprite.scale.x *= -1
		this

	fall: (dy = 0) ->
		if @sprite.position.y < ground_line
			@sprite.position.y += 1


	jump: () ->
		@sprite.position.y += @sprite.height

	fire_projectile: (stage) ->
		new Projectile(stage, @sprite.position.x + @sprite.width, @sprite.position.y, 5, @direction, 1000, true)

	move_character: (dx = 0, dy = 0) ->
		@sprite.position.x += dx
		@fall(dy)
		this

	damage:(damage = 1) ->
		@damage_timer = Date.now() + 1000
		hero.health -= damage
		@sprite.tint = 0xFF0000

	update: () ->
		if @health <= 0
			@alive = false
		else
			if Date.now() > @damage_timer
				@sprite.tint = 0xFF0000
			else:
				@sprite.tint = 0xFFFFFF
			console.log(@health)
			flip = (@direction == -1 and @velocity_x < 0) or (@direction == 1 and @velocity_x > 0)
			if flip
				@move_character(@direction * @sprite.width, 0)
				@flip_sprite()

			@move_character(@velocity_x, @velocity_y) if not flip
			@velocity_x = 0
			@velocity_y = 0
		this


hero_texture = PIXI.Texture.fromImage('static/duckpower.gif')

hero = new Player(new PIXI.Sprite(hero_texture))
