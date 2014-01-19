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

	collision_test_enemy: (enemy) ->
		b1 = @bounding_box
		b2 = enemy.bounding_box()
		not(b1.x < b2.x + b2.width and b1.x + b1.width > b2.x and
		b1.y < b2.y + b2.height and b1.y + b1.height > b2.y)

	collison_test: (enemy_list) ->
		@bounding_box = @bounding_box()
		enemy_list.some((enemy) -> enemy.collision_test_enemy)

	update: (enemy_list) ->
		if @health <= 0
			@alive = false
		else
			@health -= 1 if collison_test(enemy_list)
			move_character(@velocity_x, @velocity_y)
			flip_sprite() if @direction == 0 and @velocity_x < 0
			flip_sprite() if @direction == 0 and @velocity_x < 0
			@velocity_x = 0
			@velocity_y = 0
		this
 
	bounding_box: ->
		new PIXI.Rectangle(@sprite.position.x, @sprite.position.y, @sprite.width, @sprite.height)

hero = new Player(PIXI.Texture.fromImage('static/bunny.png'))
