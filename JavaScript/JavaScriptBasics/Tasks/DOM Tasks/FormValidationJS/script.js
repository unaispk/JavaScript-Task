function validateForm() {
    let userId = document.getElementById('userid').value;
    let nameSpan = document.getElementById('nameSpan');
    let password = document.getElementById('password').value;
    let passwordSpan = document.getElementById('passwordSpan');
    let username = document.getElementById('username').value;
    let usernameSpan = document.getElementById('usernameSpan');
    let country = document.getElementById('country').value;
    let countrySpan = document.getElementById('countrySpan');
    let zip = document.getElementById('zip').value;
    let zipSpan = document.getElementById('zipSpan');
    let emailid = document.getElementById('emailid').value;
    let emailidSpan = document.getElementById('emailidSpan');
    let gender = document.getElementsByName('gender').checked ;
    let genderSpan = document.getElementById('genderSpan');
    // let language = document.getElementsById('language').checked ;
    // let languageSpan = document.getElementById('languageSpan');

    if (userId === '') {
        nameSpan.innerHTML = "User ID cannot be empty";
        // return false;
    }

    if (password === '')  {
        passwordSpan.innerHTML = "Password required";
        // return false;
    } else if ( password.length < 8) {
        passwordSpan.innerHTML = "Password must be atleast 8 characters";
    }

    if (username === '') {
        usernameSpan.innerHTML = 'Name cannot be empty';
        // return false;
    }

    if (country === 'Select a Country') {
        countrySpan.innerHTML = 'You must select a country';
        // return false;
    }

    if(zip === '') {
        zipSpan.innerHTML = "ZIP Code Required";
        // return false;
    }

    if (emailid === '' || typeof emailid !== "email") {
        emailidSpan.innerHTML = "Required a valid email ID";
        // return false;
    }

    if (!gender) {
        genderSpan.innerHTML = "Required";
        // return false;
    }

    // if (!language) {
    //     languageSpan.innerHTML = "Required";
    //     // return false;
    // }

    return false; // Prevent form submission
}