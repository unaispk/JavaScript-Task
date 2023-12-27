//------------------------ENCAPSULATION------------------
// Combining data(properties) and functions(methods) together

// Encapsulation using getters and setters 
let Employee = {
    firstName : '',
    lastName : '',
    salary: 0,

    //Getter method to retrieve full name
    get fullName() {
        return this.firstName + " " +this.lastName;
    },
    //Setter method to set full name
    set fullName(name) {
        let parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
    // Getter method to retrieve salary
    getSalary() {
        return this.salary;
    },
    // Setter method to set salary
    setSalary(amount) {
        if(amount > 0) {
            this.salary = amount;
        } else {
            console.log('Salary should be greater than 0');
        }
    },
};
//Setting full name and salary using setters
Employee.fullName = 'Muhammed Unais';
Employee.setSalary(50000);
//Retrieving and displaying information using getters
console.log('Employee: ', Employee.fullName);
console.log('Salary: ',Employee.getSalary());