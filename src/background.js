function init() {
		stage = new PIXI.Stage(0x66FF99);
		renderer = new PIXI.autoDetectRenderer(
		1300,
		650,
		document.getElementById("game-canvas")
		);
		var farTexture = PIXI.Texture.fromImage("static/cave-background.jpg");	
		far = new PIXI.TilingSprite(farTexture, 1300, 650);
		far.position.x = 0;
		far.position.y = 0;
		far.tilePosition.x = 0;
		far.tilePosition.y = 0;
		stage.addChild(far);


        //file doesn't exist it still works. wat
		var midTexture = PIXI.Texture.fromImage("static/ignore.png");
		mid = new PIXI.TilingSprite(midTexture, 512, 256);
		mid.position.x = 0;
		mid.position.y = 128;
		mid.tilePosition.x = 0;
        mid.tilePosition.y = 0;
        stage.addChild(mid);
        requestAnimFrame(update);
    }
function update() {
		far.tilePosition.x -= 0.128;
		mid.tilePosition.x -= 0.64;
		renderer.render(stage);
		requestAnimFrame(update);
}

