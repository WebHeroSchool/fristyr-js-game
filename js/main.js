
class Game {
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

    randomAnimals() {
        const indexEmoje = Math.floor (Math.random() * this.animals.length);
        const animals = this.animals[indexEmoje];
        console.log(indexEmoje);
        return animals;
    }

    creatingAnimals() {
        let currentPipe = this.randomPipe();
        currentPipe.addEventListener('click', this.emojeClickHandler);
        currentPipe.innerHTML = this.randomAnimals();
        setTimeout(()=> {
          currentPipe.removeEventListener('click', this.emojeClickHandler, false);
          currentPipe.innerHTML = ''
        }, this.speed);
      }
      
      startGame() {
        setInterval(() => this.creatingAnimals(), this.speed);
      }
      
}


let game = new Game;
game.startGame();




  