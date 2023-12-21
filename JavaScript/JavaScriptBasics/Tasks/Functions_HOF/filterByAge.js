const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 40 }
];

const result = people.filter(person => person.age > 30).map(person => person.name);
console.log(result);