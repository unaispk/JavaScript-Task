class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return `I have a ${this.carname}`;
    }
}

class Model extends Car {
    constructor(brand,mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return `${this.present} it's a ${this.model}`;
    }
}



let Mustang = new Model("Ford", "Mustang");
console.log(Mustang.show());