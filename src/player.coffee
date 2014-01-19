class Player
	@life = 3

	constructor: (@sprite) ->
		@alive = true
		@health = 3
		@velocity_x = 0
		@velocity_y = 0
		@direction  = 1 #facing right

	flip_sprite: () ->
		@direction *= -1
		@sprite.scale.x *= -1
		this

	move_character: (dx = 0, dy = 0) ->
		@sprite.position.x += dx
		@sprite.position.y += dy
		this

	collison_test: (enemy_list) ->


	update: () ->
		if @health <= 0
			@alive = false
		else
			move_character(@velocity_x, @velocity_y)
			flip_sprite() if @direction == 0 and @velocity_x < 0
			flip_sprite() if @direction == 0 and @velocity_x < 0
			@velocity_x = 0
			@velocity_y = 0
		this

	bounding_box: ->
		new Rectangle(@sprite.position.x, @sprite.position.y, @sprite.width, @sprite.height)

hero = new Player(PIXI.Texture.fromImage('static/hero.png'))