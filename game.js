class Game {
	constructor() {
		// the player is part of the game
		this.backgroundImage;
        this.timer = 0;
        this.score;
	}
	preload() {
        //this.backgroundSound = loadSound('sounds/ambient.mp3');
		// we preload the image - this is called in the main preload function
        this.playerImage = loadImage('images/angelcharacter.png');
        this.plantImage = loadImage('images/plant_stages/1.png');
        this.plantImage2 = loadImage('images/plant_stages/2.png');
        this.plantImage3 = loadImage('images/plant_stages/3.png');
        this.plantImage4 = loadImage('images/plant_stages/4.png');
        this.plantImage5 = loadImage('images/plant_stages/5.png');
        this.plantImage6 = loadImage('images/plant_stages/6.png');
        this.plantImage7 = loadImage('images/plant_stages/7.png');
        this.tomato = loadImage('images/tomato.png');
        
        this.rain = loadImage('images/rain.gif');

        this.deadPlant = loadImage('images/dead.png');

		this.backgroundImage = loadImage('images/marsBackground.jpg');
	}

    setup(){
        this.player = new Player();
        this.plant1 = new Plant(140);
        this.plant2 = new Plant(300);
        this.plant3 = new Plant(460);
        this.plant4 = new Plant(620);
        this.plant5 = new Plant(780);

        //create 5 plants
    }

	draw() {
        //this.backgroundSound.play()
        //Text("score" + this.player.has_tomatoes, 100, 100, 100)
        //console.clear()
        
		//clear();
        if (frameCount % 60 == 0){
            this.timer += 1;
        }
        //text(timer, 100, 100)
        //same size as the canvas for width and height
        image(this.backgroundImage, 0, 0, 1000, 500)
		// the player is able to draw itself
		this.player.draw();
        this.plant1.draw();
        //this.plant2.x = 300;
        this.plant2.draw();
        //this.plant3.x = 460
        this.plant3.draw();
        //this.plant4.x = 620;
        this.plant4.draw();
        //this.plant5.x = 780;
        this.plant5.draw();
	}
}

