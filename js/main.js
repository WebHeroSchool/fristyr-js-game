
class Game {
  constructor(){
      this.score = 0;
      this.lives = 3;
      this.isRunning = false;
      this.isMouse = false;
      this.levelSpeed = 1;
      this.lastPipe;
      this.speed = 1500;
      this.currentEmoji = null;

      


      this.animals = ['🐭', '🐼', '🐻', '🦊', '🐱', '🐮', '🦁', '🐽', '🐨', '🐰', '🐯'];


      this.startButt = document.getElementById('gameButt');
      this.selectPipe = document.querySelectorAll('.game-zone__pipe');
      
  }
  randomPipe() {
      const indexPipe = Math.floor (Math.random() * this.selectPipe.length);
      const pipe = this.selectPipe[indexPipe];
      return pipe;
  }

  randomAnimals() {
      const indexEmoje = Math.floor (Math.random() * this.animals.length);
      const animals = this.animals[indexEmoje];
      return animals;
  }


  creatingAnimals() {
    let currentPipe = this.randomPipe();
    this.currentEmoji = this.randomAnimals();
    currentPipe.innerHTML = this.currentEmoji
    currentPipe.classList.add('emoji_animation');
    setTimeout(()=> {
      currentPipe.classList.remove('emoji_animation');
      currentPipe.innerHTML = ''
    }, this.speed);
  }
  startGame() {
    setInterval(() => this.creatingAnimals(), this.speed);
    document.addEventListener('click', () => this.clickOnEmoji());
  }

 clickOnEmoji(evt) {
    console.log( 'emoji = ' + this.currentEmoji )
  } 
    
}


let game = new Game;
game.startGame();




  