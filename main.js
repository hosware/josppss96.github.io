const game = new Game();

function preload() {
	game.preload();
}

function setup() {
	createCanvas(1000,500);
    frameRate(60)
	game.setup();
}

function draw() {
    //console.log("party");
    //console.clear()
    //console.log(game.timer);

	game.draw();
    //console.log(game.plant1.watered, "water level")
}

function keyPressed() {
	if (keyCode === 37) {
		game.player.moveLeft();
	}
    if (keyCode === 39){
        game.player.moveRight();
    }
    if (keyCode == 32){
        if (game.player.x === 140){
            console.log("watering")
            game.player.water(game.plant1)}
        else if (game.player.x === 300){
            game.player.water(game.plant2);}
        else if (game.player.x === 460){
            game.player.water(game.plant3);
        }
        else if (game.player.x === 620){
            game.player.water(game.plant4);
        }
        else if (game.player.x == 780){
            game.player.water(game.plant5);
        }
        }
    }
