class Plant{
    constructor(x){
        this.watered = 3;
        this.image;
        this.x = x;
        this.alive = true;
        this.toggler = 0;
    }
 
    draw(){
        //image(game.plantImage, this.x, 400, 0, 0);
        //this.toggler = 0;

        if (this.watered <= 0){
            this.alive = false;
        }else{
            this.alive = true;
        }
        if (this.alive === false){
            image(game.deadPlant, this.x, 350, 100, 100);
        }

        if (this.lives <= 0){
            image(game.deadPlant, this.x, 350, 100, 100);
        }

        else if (game.timer > 10 && game.timer < 20){
            //this logic hear seems wrong
            if (game.timer === 11 && this.toggler === 0){
                this.watered--;
                this.toggler = 1;
                console.log(this.watered, "PUPUPUPU")}
            image(game.plantImage2, this.x, 390, 0, 0);
           //game.plantImage = loadImage('images/plant_stages/3.png');
        }
        else if(game.timer > 19 && game.timer < 30){
            if (game.timer === 20 && this.toggler === 1){
                this.toggler = 0;
                this.watered--;}
            image(game.plantImage3, this.x, 370, 0, 0);
        }
        else if(game.timer > 29 && game.timer < 40){
            if (game.timer === 30 && this.toggler === 0){
                this.toggler = 1;
                this.watered--;}
            image(game.plantImage4, this.x, 350, 100, 100);
        }
        else if (game.timer > 39 && game.timer < 50){
            if (game.timer === 40 && this.toggler === 1){
                this.toggler = 0;
                this.watered--;}
            image(game.plantImage5, this.x, 290, 120, 160);
        }
        else if(game.timer > 49 && game.timer < 60){
            if (game.timer === 50 && this.toggler === 0){
                this.toggler = 1;
                this.watered--;}
            image(game.plantImage6, this.x, 270, 120, 180);
        }
        else if(game.timer > 59 && game.timer < 70){
            if (game.timer === 60 && this.toggler === 1){
                this.toggler = 0;
                this.watered -= 2;}
            image(game.plantImage7, this.x, 270, 120, 180);
        }
        else if(game.timer > 70 && this.toggler === 0){
            this.toggler = 1;
            this.watered -= 2;
            game.timer = 0;
            game.player.has_tomatoes = Math.floor(Math.random() * 10);
        }
        else{
            image(game.plantImage, this.x, 400, 0, 0);
        }
        //20 40
        //39 60
        //59 80
        //79 100
        //99 120
        //
        ;

        //image(game.plantImage, 300, 400, 0, 0);
        //image(game.plantImage, 460, 400, 0, 0);
        //image(game.plantImage, 620, 400, 0, 0);
        //image(game.plantImage, 780, 400, 0, 0);

    }
}