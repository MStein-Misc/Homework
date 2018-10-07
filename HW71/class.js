'use strict';

class Vehicle {
    constructor(color) {
        this.color = color;
        this.speed = 0;
    }
    go(speed) {
        this.speed = speed;
        console.log(speed, 'going');
    }
    print() {
        console.log(this.color, this.speed)
    }
}

class Plane extends Vehicle {
    go(speed) {
        this.speed = speed;
        console.log(speed, 'flying');
    }
}