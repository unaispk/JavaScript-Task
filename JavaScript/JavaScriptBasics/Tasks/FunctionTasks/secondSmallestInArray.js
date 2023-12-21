let numbers = [10,2,5,8,15,25,7];
function secondSmallest() {

    //sort array in ascending order
    numbers.sort(function(a,b) {
        return a - b;
    });
    return numbers[1];
}
console.log(secondSmallest());