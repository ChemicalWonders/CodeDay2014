ground_line = 500
class Player
	@life = 3

	constructor: (@sprite) ->
		sprite.anchor.x = 0
		sprite.anchor.y = 0.2
		@alive = true
		@health = 6
		@velocity_x = 0
		@velocity_y = 0
		@direction  = 1 #facing right

	flip_sprite: () ->
		@direction *= -1
		@sprite.scale.x *= -1
		this

	fall: () ->
		if @velocity_y < 0 and @sprite.position.y > ground_line
			@sprite.position.y =- 1
		@velocity_y += 1 if @velocity_y < 0

	move_character: (dx = 0) ->
		@sprite.position.x += dx
		@fall()
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
			move_character(@velocity_x)
			flip_sprite() if @direction == 0 and @velocity_x < 0
			flip_sprite() if @direction == 0 and @velocity_x > 0
			@velocity_x = 0
			@velocity_y = 0
		this

	bounding_box: ->
		new PIXI.Rectangle(@sprite.position.x, @sprite.position.y, @sprite.width, @sprite.height)

hero = new Player(PIXI.Texture.fromImage('static/hero.png'))
kd.LEFT.down(() -> hero.velocity_x -= 5 )
kd.RIGHT.down(() -> hero.velocity_x += 5 )
kd.X.down(() -> hero.velocity_y -= 5 )