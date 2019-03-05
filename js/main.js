class catchMouse {
    constructor(){
        this.score = 0;
        this.lives = 3;
        this.isRunning = false;
        this.isMouse = false;
        this.levelSpeed = 1;
        this.lastPipe;
        this.speed = 2100;

        


        this.animals = ['🐭', '🐼', '🐻', '🦊', '🐱', '🐮', '🦁', '🐽', '🐨', '🐰', '🐯'];


        this.startButt = document.getElementById('gameButt');
        this.selectPipe = document.querySelectorAll('.game-zone__pipe');
        
    }



    randomPipe() {
        const indexPipe = Math.floor (Math.random() * this.selectPipe.length);
        const pipe = this.selectPipe[indexPipe];

        if (pipe === this.lastPipe) {
            return this.randomPipe();
          }
          this.lastPipe = pipe;
          return pipe;
    }
    getRandomEmoje() {
        const indexEmoje = Math.floor (Math.random() * this.animals.length);
        const animals = this.animals[indexEmoje];
        console.log(indexEmoje);
        return animals;
    }
    appearingOfEmoje() {
        const createAnimalWrapp = document.createElement("span");
        createAnimalWrapp.innerHTML = randomAnimal;
    }
    gameInit() {
        
    }
      
}


let test = new catchMouse().getRandomEmoje();
console.log(test)