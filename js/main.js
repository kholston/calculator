function add(num1,num2){

    return num1 + num2;
}

function subtract(num1,num2){

    return num1 - num2;
}

function multiply(num1,num2)
{
    return num1 * num2;
}

function divide(num1,num2)
{
    return num1 / num2;
}

function operate(num1,num2,operator)
{
    let result = 0;
    switch(operator){
        case add:
            result = add(num1,num2);
            break;

        case subtract:
            result = subtract(num1,num2);
            break;

        case multiply:
            result = multiply(num1,num2);
            break;

        case divide:
            result = divide(num1,num2);
            break; 

        default:
            result = "ERR";           
        }    
    

    return result;
}