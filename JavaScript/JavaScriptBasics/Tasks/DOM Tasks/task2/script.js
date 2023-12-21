function countRadio() {
    let radio = document.getElementsByName('gender').length;
    console.log();
    alert(`tottal radio buttons ${radio}`)
}


function paragraphLength() {
    let para = document.querySelector('p').textContent;

    alert(`Total charecters in the above paragraph is ${para.length}`)
}


function totalH2() {
    let totalH2 = document.getElementsByTagName('h2').length;
    alert(`total ${totalH2} h2 tags here`)
}

function changeBTN() {
    let heading = document.querySelector('h1');
    heading.innerHTML = "Good Morning All Of You"
}

