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

let objectArea = new Area();
objectArea.PI = Math.PI;

console.log(`Area of circle is ${objectArea.circle(4)}`);
console.log(`Area of triangle is ${objectArea.triangle(4,6)}`);
console.log(`Area of rectangle is ${objectArea.rectangle(5,8)}`);
console.log(`Area of cube is ${objectArea.cube(5)}`);

