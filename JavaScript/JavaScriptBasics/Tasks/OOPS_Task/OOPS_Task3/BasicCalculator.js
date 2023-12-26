class Calculator {
    constructor(num1,num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    summation() {
        return this.num1 + this.num2;
    }
    substraction() {
        return this.num1 - this.num2;
    }
    multiplication() {
        return this.num1 * this.num2;
    }
    division() {
        return this.num1 / this.num2;
    }
}

let calc = new Calculator(10,5);

console.log(calc.summation());
console.log(calc.substraction());
console.log(calc.multiplication());
console.log(calc.division());