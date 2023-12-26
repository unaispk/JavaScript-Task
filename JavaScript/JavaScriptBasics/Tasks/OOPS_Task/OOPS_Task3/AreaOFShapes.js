class Area {
    circle(radius) {
        return (this.pi * (radius * radius)).toFixed(2);
    }
    get PI() {
        return this.pi;
    }
    set PI(pi) {
        this.pi = pi;
    }
    triangle(b,h) {
        return (b*h)/2;
    }
    rectangle(width,length) {
        return width * length;
    }
    cube(a) {
        return 6*(a*a);
    }
}

let circleArea = new Area();
circleArea.PI = Math.PI;
let cubeArea = new Area();
let triangleArea = new Area();
let rectangleArea = new Area();


console.log(`Area of circle is ${circleArea.circle(4)}`);
console.log(`Area of triangle is ${triangleArea.triangle(4,6)}`);
console.log(`Area of rectangle is ${rectangleArea.rectangle(5,8)}`);
console.log(`Area of cube is ${cubeArea.cube(5)}`);

