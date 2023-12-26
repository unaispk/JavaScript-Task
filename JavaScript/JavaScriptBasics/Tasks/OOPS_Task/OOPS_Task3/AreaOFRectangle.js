class Rectangle {
    constructor(length,width) {
        this.length = length;
        this.width = width;
    }
}

class AreaOfRectangle extends Rectangle{
    Area() {
        return this.width * this.length;
    }
}

let rectangle1 = new AreaOfRectangle(8,5);
console.log(rectangle1.Area());