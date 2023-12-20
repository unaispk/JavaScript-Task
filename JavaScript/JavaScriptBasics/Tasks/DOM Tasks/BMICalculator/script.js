// The formula is BMI = kg/m2 where kg is a 
// person’s weight in kilograms and m2 is their height in metres squared.

function calculateBmi() {
    let heightInput = document.getElementById('height').value;
    let weightInput = document.getElementById('weight').value;

    // Check if inputs are not empty and are numeric
    if (heightInput.trim() === '' || weightInput.trim() === '' || isNaN(heightInput) || isNaN(weightInput)) {
        console.log('Please enter valid height and weight.');
        return; // Stop execution
    }

    let height = parseFloat(heightInput) / 100; // for Converting height to meters (ie ; BMI = kg/m^2)
    let weight = parseFloat(weightInput);

    let BMI = weight / (height * height);
    
    // console.log(`BMI : ${BMI.toFixed(2)}`); 

    document.getElementById('bmiValue').innerHTML = BMI.toFixed(1);
    let message;
    switch(true) {
        case (BMI < 18.5):
            message = "UNDERWEIGHT";
            break;
        case (BMI >= 18.5 && BMI < 24.9):
            message = "NORMAL";
            break;
        case (BMI >= 25.0 && BMI < 29.9):
            message = "OVERWEIGHT";
            break;
        case (BMI >= 30.0 && BMI < 34.9):
            message = "OBESE";
            break;
        case (BMI >35.0):
            message = "EXTREMELY OBESE";
            break;
    }
    document.getElementById('bmiMessage').innerHTML = message;
}