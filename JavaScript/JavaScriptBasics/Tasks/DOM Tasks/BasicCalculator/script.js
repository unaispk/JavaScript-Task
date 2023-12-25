const buttonClick = (value) => screen.value += value;
// const deleteBtn = () => screen.value = screen.value.toString().slice(0,-1);
// const equalBtn = () => screen.value = eval(screen.value);

let screen = document.getElementById('screen');

const onlyAllow = (event) => {
    const allowedChars = /[0-9+\-*/.=]|Backspace|Delete|Enter/;
    return event.key.match(allowedChars);
};

const updateScreen = (value) => {
    if (!isNaN(value) || value === '.' || ['+', '-', '*', '/'].includes(value)) {
        screen.value += value;
    }
};

const allClear = () => {
    screen.value = '';
};

const deleteBtn = () => {
    screen.value = screen.value.slice(0, -1);
};

const equalBtn = () => {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
};

screen.addEventListener('input', () => {
    screen.value = screen.value.replace(/[^0-9+\-*/.=]/g, '');
});

document.addEventListener('keypress', (event) => {
    if (event.key.match(/[0-9+\-*/.=]/)) {
        updateScreen(event.key);
    }
});

document.addEventListener('keydown', (event) => {
    if(event.key === 'Backspace') {
        deleteBtn();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        equalBtn();
        event.preventDefault(); // Prevent the default behavior of the 'Enter' key
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '=') {
        equalBtn();
        event.preventDefault(); 
    }
});
