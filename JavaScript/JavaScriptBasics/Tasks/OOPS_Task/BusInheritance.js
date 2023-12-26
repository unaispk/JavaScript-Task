// Task 1: Create a child class Bus that will inherit all of the variables and methods of the Vehicle class

// Task 2:  Create a Bus class that inherits from the Vehicle class. Give the capacity argument of Bus.seating_capacity() a default value of 50.
class Vehicle {
    constructor(color,place){
        this.color = color;
        this.place = place;
    }  
}

class Bus extends Vehicle {
    constructor(color,place,seat) {
        super(color,place);
        this.seat = seat;
    }
    Bus_seating_capacity() {
        return `${this.color} bus at ${this.place} have ${this.seat} capacity`;
    }
}

let Omega = new Bus("Pink", "Kozhikkode", 70);
console.log(Omega.Bus_seating_capacity());