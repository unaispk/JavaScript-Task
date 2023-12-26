// create classes calculation1,calculation2 with method summation ,
// multiplication and child class calculation 3 with method division
class Calculation1 {
    constructor(num1,num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    summation() {
        return this.num1 + this.num2;
    }
}

class Calculation2 extends Calculation1 {
    multiplication() {
        return this.num1 * this.num2;
    }
}

class Calculation3 extends Calculation2{
    division() {
        return this.num1 / this.num2;
    }
}

let calc = new Calculation3(10,5);
console.log(calc.summation());
console.log(calc.multiplication());
console.log(calc.division());