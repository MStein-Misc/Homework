'use strict';

function Vehicle(color) {
    this.color = color;
}
Vehicle.prototype.go = function (speed) {
    this.speed = speed;
    console.log(speed, 'going');
}
Vehicle.prototype.print = function () {
    console.log(this.color, this.speed);
}

function Plane(color) {
    this.color = color;
}
Plane.prototype = Object.create(Vehicle.prototype);
Plane.prototype.constructor = Plane;
Plane.prototype.go = function (speed) {
    this.speed = speed;
    console.log(speed, 'flying');
}