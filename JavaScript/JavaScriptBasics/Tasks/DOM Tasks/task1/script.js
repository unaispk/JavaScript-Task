


function showResult() {
let firstInput = document.getElementById('first')
let secondInput = document.getElementById('second')


let num1 = parseInt(firstInput.value);
let num2 = parseInt(secondInput.value);

let result = num1 + num2;

    document.getElementById('result').innerHTML = result;
}