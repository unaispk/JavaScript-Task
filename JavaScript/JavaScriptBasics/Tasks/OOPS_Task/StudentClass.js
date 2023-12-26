class Student {
    constructor(rollNo,name){
        this.rollNo = rollNo;
        this.name = name;
    }

    display() {
        console.log(`${this.rollNo} : ${this.name}`);
    }

    get Age(){
        return this.age;
    }

    set setAge(age) {
        this.age = age;
    }

    get Marks(){
        return this.marks;
    }

    set setMarks(marks) {
        this.marks = marks;
    }

}

let student1 = new Student(14,"John");
student1.display();

student1.setAge = 22;
student1.setMarks = 74;

// console.log(student1.Age);
console.log(`Age : ${student1.Age} Marks : ${student1.marks}`);