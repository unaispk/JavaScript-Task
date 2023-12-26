class Circle {
    constructor(radius){
        this.radius = radius;
    }
    get PI() {
        return this.pi;
    }
    set PI(pi){
        this.pi = pi;
    }
    findCircleArea() {
        return (this.pi * (this.radius * this.radius)).toFixed(2);
    }
}

let circle_1 = new Circle(4);
circle_1.PI = Math.PI;
console.log(circle_1.findCircleArea());