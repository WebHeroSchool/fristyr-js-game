class Game {
  constructor(){
      this.score = 0;
      this.lives = 3;
      this.isRunning = false;
      this.isMouse = false;
      this.levelSpeed = 1;
      this.speed = 1500;
      this.currentEmoji = null;
      this.currentPipe = null

      


      this.animals = ['🐭', '🐼', '🐻', '🦊', '🐱', '🐮', '🦁', '🐽', '🐨', '🐰', '🐯'];


      this.startButt = document.getElementById('gameButt');
      this.selectPipe = document.querySelectorAll('.game-zone__pipe_animal');
      
  }
  randomPipe() {
      const indexPipe = Math.floor (Math.random() * this.selectPipe.length);
      const pipe = this.selectPipe[indexPipe];
      this.currentPipe = pipe
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
    currentPipe.innerHTML = this.currentEmoji;
    currentPipe.classList.add('emoji_animation');
    setTimeout(()=> {
      currentPipe.classList.remove('emoji_animation');
      currentPipe.innerHTML = '';
    }, this.speed);
  }
startGame() {
    setInterval(() => this.creatingAnimals(), this.speed);
    document.addEventListener('click', (e) => this.clickOnEmoji(e));
  }

 clickOnEmoji(evt) {
    if (evt.target === this.currentPipe) {
      console.log('emoji = ' + this.currentEmoji)
    } else {
      console.log(" Please click on animal ")
    }
  } 
    
}


let game = new Game;
game.startGame();




  