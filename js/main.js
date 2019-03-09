class Game {
  constructor(){
      this.score = 0;
      this.lives = 0;
      this.isRunning = false;
      this.isMouse = false;
      this.levelSpeed = 0;
      this.speed = 1500;
      this.currentEmoji = null;
      this.currentPipe = null

      


      this.animals = ['🐭', '🐼', '🐻', '🦊', '🐱', '🐮', '🦁', '🐽', '🐨', '🐰', '🐯'];


      this.startButt = document.getElementById('gameButt');
      this.selectPipe = document.querySelectorAll('.game-zone__pipe_animal');
      this.heartElem = document.querySelectorAll('.lives-wrapp__heart');
      this.livesInStock = document.querySelectorAll('.lives-wrapp__heart_active');
      this.speedValueNum = document.querySelector('.speed__value_num');
      
  }

  fillLives() {
    this.heartElem.forEach((live) => live.classList.add('lives-wrapp__heart_active'));
    this.lives = this.heartElem.length;
  }

  deleteHeart() {
    this.livesInStock = document.querySelectorAll('.lives-wrapp__heart_active');
    this.lives = this.livesInStock.length;
    this.livesInStock[this.livesInStock.length - 1].classList.remove('lives-wrapp__heart_active');
    this.lives = this.lifes - 1;
  }

  fillInitScore() {
    this.score = 0
    this.scoreElement = document.querySelector('.score__value');
    this.scoreElement.innerHTML = this.score;
  }

  fillMainScore(num) {
    this.score = this.score + num;
    this.scoreElement = document.querySelector('.score__value');
    this.scoreElement.innerHTML = this.score;
  }

  fillInitLevel() {
    this.levelSpeed += 1;
    this.speedValueNum.innerHTML = '';
    setTimeout(()=> this.speedValueNum.innerHTML = this.levelSpeed, 600);
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
    this.fillLives();
    this.fillInitScore();
    this.fillInitLevel();
    setInterval(() => this.creatingAnimals(), this.speed);
    document.addEventListener('click', (e) => this.clickOnEmoji(e));
  }

 clickOnEmoji(evt) {
    if (evt.target === this.currentPipe) {
      console.log('emoji = ' + this.currentEmoji)
    }
    document.removeEventListener('click', (e) => this.clickOnEmoji(e)); 
  } 
    
}

let buttonStart = document.querySelector('.button_start');


function buttonClick () {
    buttonStart.removeEventListener('click', buttonClick, false);
    let game = new Game;
    game.startGame();
}
  
buttonStart.addEventListener('click', buttonClick);





  