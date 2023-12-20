// Calculate sum of first n numbers using do.....while

// let i=0;
// let sum=0
// do {
//     sum = sum + i;
//     i++;
// } while (i<=10);

// console.log(`sum of first n numbers is ${sum}`);

let i=0;
let sum=0

for (i=0;i<=10;i++){
    if(i%2==0){
        sum=sum+i;
    }
}
console.log(sum);