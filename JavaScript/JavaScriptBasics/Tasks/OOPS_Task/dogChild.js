// create a class animal and create sub class dog, and based on dog create another subclass dogchild
class Animal {
    constructor(type) {
        this.type = type;
    }
}

class Dog extends Animal {
    constructor(type,sound) {
        super(type);
        this.sound = sound;
    }
}

class DogChild extends Dog {
    show() {
        return `Type: ${this.type} Sound:${this.sound}`;
    }
}

let DogChild_1 = new DogChild('Pet', 'barks');
console.log(DogChild_1.show());
