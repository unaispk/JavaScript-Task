function convertToCm() {
    let feet = parseInt(document.getElementById('feet').value);
    let inch = parseInt(document.getElementById('inch').value);

    let feetInCm = feet/0.032808;
    let inchInCm = inch/0.39370
    
    let result = feetInCm + inchInCm;
    
    document.getElementById('result').innerHTML = result;
}