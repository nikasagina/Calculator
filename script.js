const diplayTop = document.querySelector('#top-display');
const displayBot = document.querySelector('#bot-display');

let currResult = 0;
let currNum = 0;


const button0 = document.querySelector('#zero');
const button1 = document.querySelector('#one');
const button2 = document.querySelector('#two');
const button3 = document.querySelector('#three');
const button4 = document.querySelector('#four');
const button5 = document.querySelector('#five');
const button6 = document.querySelector('#six');
const button7 = document.querySelector('#seven');
const button8 = document.querySelector('#eight');
const button9 = document.querySelector('#nine');

const buttonAC = document.querySelector('#AC');
const buttonDEL = document.querySelector('#Del');
const buttonPercent = document.querySelector('#percent');

const buttonAdd = document.querySelector('#add');
const buttonSub = document.querySelector('#sub');
const buttonMult = document.querySelector('#mult');
const buttonDiv = document.querySelector('#div');

const buttonEquals = document.querySelector('#equals-button');


function numPressed(num){
    currNum *= 10;
    currNum += num
    displayBot.textContent = currNum;
}

button0.addEventListener('click', ()=>numPressed(0));
button1.addEventListener('click', ()=>numPressed(1));
button2.addEventListener('click', ()=>numPressed(2));
button3.addEventListener('click', ()=>numPressed(3));
button4.addEventListener('click', ()=>numPressed(4));
button5.addEventListener('click', ()=>numPressed(5));
button6.addEventListener('click', ()=>numPressed(6));
button7.addEventListener('click', ()=>numPressed(7));
button8.addEventListener('click', ()=>numPressed(8));
button9.addEventListener('click', ()=>numPressed(9));


