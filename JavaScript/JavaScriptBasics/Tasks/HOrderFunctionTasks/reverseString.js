// Given an array of strings, use the map 
// function to create a new array where each string is reversed.

const names = ["alice", "bob", "charlie", "david"];

const reversedNames = names.map((name) => name.split('').reverse().join(''));
console.log(reversedNames);