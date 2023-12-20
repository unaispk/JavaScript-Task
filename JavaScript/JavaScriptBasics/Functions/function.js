// Anonymous function

// let sqr =  function(num){
//     console.log(num*num);
// }
// sqr(4)


// It'll exicute after the given time 
// setTimeout(function(){   
//     console.log("Hello")
// },5000)  

// Self Invoking Function

// (function(n){
//     console.log(n*n);
// }(2))

let sqr = (function(n){
    return (n*n);
}(4))
console.log(sqr);