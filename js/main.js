
class Game {
    constructor(){
        this.score = 0;
        this.lives = 3;
        this.isRunning = false;
        this.isMouse = false;
        this.levelSpeed = 1;
        this.lastPipe;
        this.speed = 1500;

        


        this.animals = ['🐭', '🐼', '🐻', '🦊', '🐱', '🐮', '🦁', '🐽', '🐨', '🐰', '🐯'];


        this.startButt = document.getElementById('gameButt');
        this.selectPipe = document.querySelectorAll('.game-zone__pipe_animal');
        
        
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
        return animals;
    }


    creatingAnimals() {
        let currentPipe = this.randomPipe();
        currentPipe.addEventListener('click', () => this.clickOnEmoji());
        currentPipe.innerHTML = this.randomAnimals();
        currentPipe.classList.add('emoji_animation');
        setTimeout(()=> {
          currentPipe.classList.remove('emoji_animation');
          currentPipe.removeEventListener('click', this.clickOnEmoji, false);
          currentPipe.innerHTML = ''
        }, this.speed);
      }

      clickOnEmoji(evt) {
        console.log( 'pipe' , 'number= ' + this.randomPipe() , ':' , 'emoji= ' , '' + this.randomAnimals())
      } 

    startGame() {
        setInterval(() => this.creatingAnimals(), this.speed);
      }
      
}


let game = new Game;
game.startGame();




  