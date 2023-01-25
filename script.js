const displayTop = document.querySelector('#top-display');
const displayBot = document.querySelector('#bot-display');

let topStr = "";
let topNum = 0;
let currNum = 0;
let equalsResult = undefined;
let isDecimal = false;
let firstDot = false;

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
const buttonDot = document.querySelector('#dot');

function numPressed(num){

    if(displayTop.textContent === "Error"){ // reset displays
        processClear();        
    }

    if(isDecimal && firstDot){
            currNum = Number(String(currNum)+ "." + String(num));
            firstDot = false;
    } else currNum = Number(String(currNum) + String(num));

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

// evaluates top string with current number
// returns result
function eval(){
    if(!topStr)
        return;
    firstNumber = parseFloat(topStr.substring(2));
    switch(topStr[0]){
        case "+":
            return firstNumber + currNum;
        case "-":
            return firstNumber - currNum;
        case "×":
            return firstNumber * currNum;
        case "/":
            if(currNum === 0){
                displayBot.textContent = "Can't divide by 0";
                displayTop.textContent = "Error";
                return;
            }
            return firstNumber / currNum;
            
    }
}

function processOperation(operation){
    if(topStr && equalsResult === undefined){
        currNum = eval();
        if(displayBot.textContent === "Can't divide by 0") return;
        displayBot.textContent = currNum;
    }

    topNum = currNum;

    if(equalsResult !== undefined){
        topNum = equalsResult;
        equalsResult = undefined;
    }

    switch(operation){
        case "add":
            topStr = "+ " + Math.abs(topNum);
            break;
        case "sub":
            topStr = "- " + Math.abs(topNum);
            break;
        case "mult":
            topStr = "× " + Math.abs(topNum);
            break;
        case "div":
            topStr = "/ " + Math.abs(topNum);
            break;
    }
    currNum = 0;
    displayTop.textContent = topStr;
}

buttonAdd.addEventListener('click',()=>processOperation("add"));
buttonSub.addEventListener('click',()=>processOperation("sub"));
buttonMult.addEventListener('click',()=>processOperation("mult"));
buttonDiv.addEventListener('click',()=>processOperation("div"));

function processEquals(){
    if(!topStr) return;
    result = eval();
    if(displayBot.textContent === "Can't divide by 0") return;

    displayTop.textContent = " = " + currNum + " " + topStr;
    if(result < 0)
        result = Math.abs(result) + "-";
    displayBot.textContent = result;
    equalsResult = result;
    currNum = 0;
}

buttonEquals.addEventListener('click',()=>processEquals());

function processClear(){
    displayTop.textContent = "";
    displayBot.textContent = "";
    topStr = "";
    topNum = 0;
    currNum = 0;
    equalsResult = undefined;
    isDecimal = false;
    firstDot = false;
}

buttonAC.addEventListener('click', ()=>processClear());

function processDelete(){
    if(currNum == 0) return;
    
    if(currNum < 10 && !isDecimal){
        currNum = 0;
    } else {
        console.log(currNum)
        currNum = parseFloat(currNum.toString().substring(0, currNum.toString().length - 1));
        if(!Number.isInteger(currNum)){
            isDecimal = false;
            firstDot = false;
        }
    } 
    
    displayBot.textContent = currNum;
}

buttonDEL.addEventListener('click',()=>processDelete());

function processDot(){
    if(!Number.isInteger(currNum)) return;
    displayBot.textContent = "." + currNum;
    isDecimal = true;
    firstDot = true;
}

buttonDot.addEventListener('click',()=>processDot());