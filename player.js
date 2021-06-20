class Player{
    constructor(){
        this.has_tomatoes = 0;
        this.x = 140;
        this.toggleRain = 0;
    }

    keepWatering(plant){
        plant.watered++;
        console.log(plant.watered, "yes im being watered")
    }
    

    draw(){
        textSize(30);
        image(game.tomato, 900, 100, 50, 50);
        text(this.has_tomatoes, 920, 70, 50, 50);
        image(game.playerImage, this.x, 50, 100, 100);
        if (this.toggleRain == 1){ 
            image(game.rain, this.x, 150, 100, 100);
        }
        //console.log("player drawing");
    }
    moveRight(){
        if (this.x < 780){
        this.x += 160;
        this.toggleRain = 0;
        }
    }
    moveLeft(){
        //if image is less or equal to 140, do not use
        if (this.x > 140){
            this.x -= 160;
            this.toggleRain = 0;
        }
    }
    water(plant){
        //if (plant.watered < 3){
         //game.rain.play();
         let timestamp = game.timer;
         console.log(timestamp)
         this.toggleRain = 1;
         plant.watered++;
         console.log(plant.watered, "water level");
         
         }

        }
   
