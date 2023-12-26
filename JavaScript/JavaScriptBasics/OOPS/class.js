class Employee {
    constructor (id,name,sallary) {
        this.id = id;
        this.name = name;
        this.sallary = sallary;
    }

    get EmployeeName() {
        return this.name;
    }
    set employeename(name) {
        this.name = name;
    }

    hello() {
        console.log(`Hello ${this.name}`);
    }
}

let objEmployee = new Employee(112,"Adem",35000);
objEmployee.employeename='HiHello'
console.log(objEmployee.EmployeeName);
console.log(objEmployee.name);
console.log(objEmployee.name,objEmployee.sallary);
objEmployee.hello();
