let displayString = '';
let display = document.getElementById("nums")

let firstValue;
let secondValue;
let firstValueSet = false;
let secondValueSet = false;
let continueOperation = false;
let currentOperator;

function add(num1,num2){

    return num1 + num2;
}

function subtract(num1,num2){

    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    if(num1 == 0 || num2 == 2) return "ERROR";
    return num1 / num2;
}

function operate(num1,num2,operator)
{
    
    let result = 0;
    switch(operator){
        case "+":
            result = add(num1,num2);
            break;

        case "-":
            result = subtract(num1,num2);
            break;

        case "*":
            result = multiply(num1,num2);
            break;

        case "/":
            result = divide(num1,num2);
            break; 

        default:
            result = "ERROR";           
        }    
    

    return result;
}




function setupButtons() {
    buttons = document.querySelectorAll("button");
    for (i = 0; i < buttons.length; i++) {
        let currentButton = buttons[i];
   
            currentButton.addEventListener("click", function () {
                // updateDisplay(currentButton.className,currentButton.innerText);
                // console.log(currentButton.innerText);
                // console.log(currentButton.className);
                processInput(currentButton);
            });
        }    
}

function clearDisplay(bool){
    // displayString = "";
    // updateDisplay(displayString);
    
    display.innerText = "";
    if(bool){
    firstValue = 0;
    secondValue = 0;
    firstValueSet = false;
    secondValueSet = false;
    }
}

function updateDisplay(string){

    display.innerText += string;
}

function processInput(buttonPressed){
let buttonClass = buttonPressed.className;
let buttonValue = buttonPressed.innerText;

    if (buttonClass == "clear") {
        clearDisplay(true);
    }

    else if (buttonClass == "equal") {
           
    }

    else if (buttonClass == "operator")
    {
        currentOperator = buttonValue;
        console.log(currentOperator);
        if(firstValueSet == false && secondValueSet == false)
        {
            firstValue = display.innerText;
            firstValueSet = true;
            console.log(firstValue);
        }
        else if(firstValueSet == true && secondValueSet == false)
        {
            secondValue = display.innerText;
            secondValueSet = true;
            console.log(secondValue);
        }

        if (firstValueSet  == true && secondValueSet == true){
            firstValue = operate(Number(firstValue),Number(secondValue),currentOperator);
            secondValueSet = false;
            console.log(firstValue);
            clearDisplay(false);
            updateDisplay(firstValue);
        }

    }
    else{
     
        if(firstValueSet == true && display.innerText == firstValue)
        {
            clearDisplay(false);
        }
        updateDisplay(buttonValue);
    }
    
    

}

setupButtons();