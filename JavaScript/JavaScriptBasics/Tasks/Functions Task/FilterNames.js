// Given an array of names (strings), filter names that start with a specific letter using the filter method.

personNames = ["Abi","John","Abe","Alex","Joe"];

let filteredNames = personNames.filter((nam) => nam.charAt(0)=="J")
console.log(filteredNames);
