// Program to Create a Class in which One Method Accepts a String from the User and Another Prints it
class Sample {
    constructor(name){
        this.name = name;
    }
}

class otherSample extends Sample {
    show() {
        console.log(`My name is ${this.name}`);
    }
}

let otherSample1 = new otherSample("Unais");
otherSample1.show();