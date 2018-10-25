

window.AntDemo = {};
(function () {
    'use strict';

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    var height, width;
    function resize() {
        canvas.width = window.innerWidth - 10;
        width = canvas.width;
        canvas.height = window.innerHeight - 10;
        height = canvas.height;
        home.x = width / 2;
        home.y = height / 2;
    };

    window.addEventListener('resize', resize);

    var home = {
        x: width / 2,
        y: height / 2,
        food: 3.3,
        color: 'brown'
    };
    home.storeFood = function () {
        home.food++;
    }
    resize();




    //============================================


    function Location(l) {
        this.x = l.x;
        this.y = l.y;
    }
    Location.prototype.equals = function (location) {
        return this.x == location.x && this.y == location.y;
    }






    //=================================================




    const step = 2;
    let focus = 50;
    Ant.height = 1, Ant.width = 1, Ant.color = 'black';
    function Ant() {
        this.location = new Location(home);
        this.focus = random(0, 50);
        this.direction = reorient();
        this.color = Ant.color;
    }
    Ant.prototype.move = function () {
        if (this.destination) {
            this.go();
            if (this.location.equals(home)) {
                this.returnHome();
            } else {
                const food = checkForFood(this.location.x, this.location.y)
                if (food) {
                    food.eaten();
                    this.foundFood();
                } else {
                    if (this.location.equals(this.destination)) {
                        this.destination = undefined;
                        this.foodLocation = undefined;
                        this.direction = reorient();
                    }
                }
            }
            if (this.foodLocation) {
                var loc = new Location(this.location);
                loc.destination = new Location(this.foodLocation);
                chemicals.push(loc);
            }
        } else {
            this.search();
            const food = checkForFood(this.location.x, this.location.y)
            if (food) {
                food.eaten();
                this.foundFood();
            }
        }
    }
    Ant.prototype.go = function () {
        // var gox = this.destination.x - this.location.x;
        // var goy = this.destination.y - this.location.y;
        // if (Math.abs(gox) > Math.abs(goy)) {
        //     this.location.x = this.location.x + 1;
        //     this.location.y = this.location.y + 1 * goy / gox;
        // } else {
        //     this.location.y = this.location.y + 1;
        //     this.location.x = this.location.x + 1 * gox / goy;
        // }
        this.location.x = this.destination.x - this.location.x > step ? this.location.x + step : this.destination.x - this.location.x < step * -1 ? this.location.x + step * -1 : this.destination.x;
        this.location.y = this.destination.y - this.location.y > step ? this.location.y + step : this.destination.y - this.location.y < step * -1 ? this.location.y + step * -1 : this.destination.y;
    }
    Ant.prototype.search = function () {
        if (this.direction.x) {
            this.location.x = this.location.x + random(0, range(this.location.x + step * this.direction.x, 0, width) ? step * this.direction.x : 0);
            this.location.y = this.location.y + random(this.location.y + step * -1 >= 0 ? step * -1 : 0, this.location.y + step <= height ? step : 0);
        } else {
            this.location.x = this.location.x + random(this.location.x + step * -1 >= 0 ? step * -1 : 0, this.location.x + step <= width ? step : 0);
            this.location.y = this.location.y + random(0, range(this.location.y + step * this.direction.y, 0, height) ? step * this.direction.y : 0);
        }
        this.focus++;
        if (this.location.x + step >= width || this.location.x <= step || this.location.y + step >= height || this.location.y <= step || this.focus >= focus) {
            this.direction = reorient();
            this.focus = random(0, 50);
        }
    }
    Ant.prototype.foundFood = function () {
        this.hasFood(true);
        this.focus = 0;
        this.destination = new Location(home);
        this.foodLocation = new Location(this.location);
    }
    Ant.prototype.returnHome = function () {
        if (this._hasFood) home.storeFood();
        this.hasFood(false);
        this.destination = new Location(this.foodLocation);
    }
    Ant.prototype.hasFood = function (yes) {
        if (yes) {
            this.color = 'red';
            this._hasFood = true;
        } else {
            this.color = Ant.color;
            this._hasFood = false;
        }
    }

    function reorient() {
        switch (random(0, 3)) {
            case 0: return { x: 1 };
            case 1: return { x: -1 };
            case 2: return { y: 1 };
            case 3: return { y: -1 };
        }
    }



    //=========================================





    function drawFood(food) {
        context.fillStyle = food.color;
        context.fillRect(food.location.x, food.location.y, food.width, food.height);
    }

    function Food(amount, x, y) {
        this.amount = amount;
        this.location = new Location({ x: x, y: y });
        this.x = x;
        this.y = y;
        this.width = amount / 5;
        this.height = amount / 10;
        this.color = 'green';
    }
    Food.prototype.eaten = function () {
        this.amount--;
        this.width = this.amount / 5;
        this.height = this.amount / 10;
    }

    function checkForFood(x, y) {
        for (const food of foods) {
            if (food.amount <= 0) continue;
            if (range(x, food.location.x, food.width) && range(y, food.location.y, food.height)) {
                return food;
            }
        }
        return false;
    }

    function randomFood() {
        return new Food(random(0, 50), random(0, width - 50), random(0, height - 50));
    }



    //===================================




    const ants = [];
    for (let i = 0; i < 3000; i++) {
        ants.push(new Ant());

    }
    const foods = [];
    for (let i = 0; i < 100; i++) {
        foods.push(randomFood());
    }

    let chemicals = [];

    function resetFrame() {

        let r = Math.sqrt(home.food * 2 / Math.PI);
        var gradient = context.createRadialGradient(home.x, home.y, 1, home.x, home.y, r);
        gradient.addColorStop(0, 'brown');
        gradient.addColorStop(0.2, 'brown');
        gradient.addColorStop(1, 'white');
        context.fillStyle = gradient;
        context.fillRect(0, 0, width, height);

        foods.forEach(food => {
            if (food.amount > 0) drawFood(food);
        });
        ants.forEach(ant => {
            context.fillStyle = ant.color;
            context.fillRect(ant.location.x, ant.location.y, Ant.width, Ant.height);
        });

    }

    function intervals() {
        ants.forEach(ant => {
            ant.move();
        });
        ants.forEach(ant => {
            if (!ant.destination && ant.focus > 20) {
                for (const loc of chemicals) {
                    if (range(ant.location.x, loc.x - 0, 5) && range(ant.location.y, loc.y - 0, 5)) {
                        ant.destination = new Location(loc.destination);
                        break;
                    }
                }
            }
        });
        chemicals = [];
        resetFrame();
    }

    function range(x, a, b) {
        return Math.floor((x - a) / b + 1) == 1;
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let id;
    AntDemo.start = function () {
        id = setInterval(intervals, 80);

        setInterval(() => {
            for (let i = 0; i < foods.length; i++) {
                foods[i] = randomFood();
            }
        }, 60000);
        // setTimeout(() => {
        //     focus = 50;
        // }, 5000);
    }
    AntDemo.pause = function () {
        clearInterval(id);
    }
    window.ants = ants;
    window.foods = foods;
}());

AntDemo.start();