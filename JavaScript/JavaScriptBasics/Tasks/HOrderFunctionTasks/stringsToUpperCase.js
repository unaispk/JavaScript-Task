// Given an array of strings, use the map function to convert
// each string to uppercase and create a new array with the modified strings.

const names = ["alice", "bob", "charlie", "david"];

const NAMES = names.map((nam) => nam.toUpperCase());
console.log(NAMES);
