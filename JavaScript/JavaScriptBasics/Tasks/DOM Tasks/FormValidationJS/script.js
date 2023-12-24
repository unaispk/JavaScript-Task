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
    var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    let emailid = document.getElementById('emailid').value;
    let emailidSpan = document.getElementById('emailidSpan');
    let gender = document.getElementsByName('gender').value;
    let genderSpan = document.getElementById('genderSpan');
    let checkboxes = document.getElementsByName('language');
    let languageSpan = document.getElementById('languageSpan');

    let isValid = ck_email.test(emailid);

    let isChecked = false;  // check box set as not checked initially

    if (!isValid) {
        emailidSpan.innerHTML = "Required a valid email ID";
    }

    if (userId === '') {
        nameSpan.innerHTML = "User ID cannot be empty";
    }

    if (password === '') {
        passwordSpan.innerHTML = "Password required";

    } else if (password.length < 8) {
        passwordSpan.innerHTML = "Password must be atleast 8 characters";
    }

    if (username === '') {
        usernameSpan.innerHTML = 'Name cannot be empty';
    }

    if (country === 'Select a Country') {
        countrySpan.innerHTML = 'You must select a country';
    }

    if (zip === '') {
        zipSpan.innerHTML = "ZIP Code Required";
    }

    if (emailid === '') {
        emailidSpan.innerHTML = "Required a valid email ID";
    }

    if ((myForm.gender[0].checked == false) && (myForm.gender[1].checked == false)) {
        genderSpan.innerHTML = "Required";
    }

    if (gender === '') {
        genderSpan.innerHTML = "Required";
    }

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            isChecked = true;
            break;
        }
    }
    if (!isChecked) {
        languageSpan.innerHTML = "Required";
    }

    return false; // Prevent invalid form submission 
}

function clearError(e) {
    document.getElementById(e).innerHTML = '';
}