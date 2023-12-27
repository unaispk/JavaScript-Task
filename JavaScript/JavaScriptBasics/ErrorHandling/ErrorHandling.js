try {
    let firstName = "Unais";
    let fullName = firstName + ' ' + lastName; // ReferenceError: lastName is not defined
}
catch(e) {
    console.log(e);
}
finally {
    console.log('Any case it will executed ');
}