class Vegetables {

    vegName(name) {
        this.name = name;
    }

    vitamin(vitamins) {
        this.vitamins = vitamins;
    }

    displayDetails() {
        console.log(`Vegetable Name: ${this.name}`);
        console.log(`Vitamins: ${this.vitamins}`);
    }
}

let veg = new Vegetables();
veg.vegName('Carrot');
veg.vitamin('Vitamin A, Vitamin K');
veg.displayDetails();