class catchMouse {
    constructor(){
        this.totalScore = 0;
        this.lives = 3;
        this.isRunning = false;
        this.isMouse = false;
        this.levelSpeed = 1;
        this.span = "";

        this.animals = {
            mouse: '🐭',
            panda: '🐼',
            bear: '🐻',
            fox: '🦊',
            cat: '🐱',
            cow: '🐮',
            lion: '🦁',
            pig: '🐽',
            koala: '🐨',
            hare: '🐰',
            tiger: '🐯'
        };
        this.emojis = [];
        
        this.speed = document.querySelector('.speed__value');
        this.score = document.querySelector('.score__value');
        this.heart = document.querySelectorAll('.lives__heart');
        this.pipes = document.querySelectorAll('.game-zone__pipe');
    }
}




