

/*TODO: 
    resize to exact tile size
    rewrite draw code to draw in 3 stages 1) redraw old head 2)draw new head 3)clear old tail if necessary 
        4) draw new apple if necessary
    out sound
    out visual
    new game / pause game control
*/





(function () {
    'use strict';

    const LEFT = 37,
        UP = 38,
        RIGHT = 39,
        DOWN = 40;

    function Location(location) {
        this.x = location.x;
        this.y = location.y;
    }
    Location.prototype.equals = function (location) {
        return this.x == location.x && this.y == location.y;
    }
    Location.prototype.set = function (location) {
        this.x = location.x;
        this.y = location.y;
    }



    //===============================


    function Snake() {
        this.location = new Location({ x: 0, y: 0 });
        this.direction = RIGHT;
        const image = document.createElement('img');
        image.src = 'Resources/snakeHead.png';
        image.onload = render;
        this.image = image;
        this.speed = 600;
        this.parts = [new Location(this.location)];
        this.bodyimage = document.createElement('img');
        this.bodyimage.src = 'Resources/sphere.jpg';
    }
    Snake.prototype.eat = function () {
        score++;
        this.speed *= .95;
    }
    Snake.prototype.moveHead = function () {
        if (this.parts.length) {
            context.drawImage(snake.bodyimage, snake.location.x, snake.location.y, tileSize, tileSize);
            const last = this.parts[this.parts.length];
            if (last) context.clearRect(last.x, last.y, tileSize, tileSize);
        } else {
            context.clearRect(snake.location.x, snake.location.y, tileSize, tileSize);
        }
        switch (this.direction) {
            case LEFT:
                this.location.x -= tileSize;
                break;
            case UP:
                this.location.y -= tileSize;
                break;
            case RIGHT:
                this.location.x += tileSize;
                break;
            case DOWN:
                this.location.y += tileSize;
                break;
        }
        if (this.location.x < 0 || this.location.y < 0 || this.location.x > canvas.width - tileSize || this.location.y > canvas.height - tileSize) {
            out();
        }
        context.drawImage(snake.image, snake.location.x, snake.location.y, tileSize, tileSize);
    }
    Snake.prototype.moveBody = function (add) {
        let last;
        if (!add) {
            last = this.parts.pop();
            if (last) context.clearRect(last.x, last.y, tileSize, tileSize);
        }
        this.parts.forEach(part => {
            if (this.location.equals(part)) {
                out();
            }
        });
        if (last || add) this.parts.unshift(new Location(this.location));
    }


    //===============================



    function Apple() {
        this.location = new Location({});
        const image = document.createElement('img');
        image.src = 'Resources/apple.jpg';
        image.onload = () => this.move([]);
        this.image = image;
    }
    Apple.prototype.move = function (locations) {
        let covered = true;
        while (covered) {
            const x = random(0, canvas.width - tileSize),
                y = random(0, canvas.height - tileSize);
            this.location.set({
                x: x - x % tileSize,
                y: y - y % tileSize
            });
            covered = false;
            for (const part of locations) {
                if (part.equals(this.location)) {
                    covered = true;
                    break;
                }
                covered = false;
            }
        }
        context.drawImage(this.image, this.location.x, this.location.y, tileSize, tileSize);
    }



    //=========================

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    function resizeCanvas() {
        canvas.width = window.innerWidth - 7;
        canvas.height = window.innerHeight - 35;
    }
    resizeCanvas();

    var snake, apple, score;
    function newGame() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        snake = new Snake(), apple = new Apple(), score = 0;
        game = true;
    }

    var highScore = localStorage.getItem("snake") || 0;

    const highScoreElem = document.getElementById('highScore');
    highScoreElem.innerHTML = highScore;
    const newGameBtn = document.getElementById('theButton');
    newGameBtn.addEventListener('click', newGame);
    window.addEventListener('resize', resizeCanvas);

    const crunchSound = document.getElementById('crunch'),
        tileSize = 64;

    document.addEventListener('keydown', event => {
        switch (event.keyCode) // note keyCode is DEPRECATED
        {
            case LEFT:
            case UP:
            case RIGHT:
            case DOWN:
                if (Math.abs(snake.direction - event.keyCode) != 2) snake.direction = event.keyCode;
        }
    });


    let game = true, timeoutid;
    function render() {
        game = true;
        snake.moveHead();
        if (snake.location.equals(apple.location)) {
            crunchSound.currentTime = 0;
            crunchSound.play();
            snake.eat();
            console.log('score', score);
            apple.move(snake.parts);
            snake.moveBody(true);
        } else {
            snake.moveBody(false);
        }
        if (game) timeoutid = setTimeout(render, snake.speed);
    }
    newGame();

    function out() {
        console.log('out');
        game = false;
        if (score > highScore) {
            localStorage.setItem("snake", score);
            highScore = score;
            highScoreElem.innerHTML = highScore;
        }
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    window.snake = snake;
    window.apple = apple;

}());

document.dispatchEvent(new Event('click'));