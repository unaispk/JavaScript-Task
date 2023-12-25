let screen = document.getElementById('screen');

const buttonClick = (value) => screen.value += value;
const allClear = () => screen.value = '' ;
const deleteBtn = () => screen.value = screen.value.toString().slice(0,-1);

const equalBtn = () => screen.value = eval(screen.value);