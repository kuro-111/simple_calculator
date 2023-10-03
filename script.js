//make buttons work
const buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach((button) => button.addEventListener("click", clickButton));

function numInput(numKey) {
     {
          let num = 0;
          num = parseInt(numKey);
          return num;
     }
}

function arithmetic(num1, operator, num2) {
     if (operator === "divide") {
          const divide = num1 / num2;
          return divide;
     } else if (operator === "multiply") {
          const multiply = num1 * num2;
          return multiply;
     } else if (operator === "add") {
          const add = num1 + num2;
          return add;
     } else if (operator === "subtract") {
          const subtract = num1 - num2;
          return subtract;
     }
}

let num1;
let strNum1 = "";
let operator = "";
let num2;
let strNum2 = "";
let operation = false;
let result;
let symbol = "";

//make an input variable and keep track of user input next --to continue
//display the inputs on the html

function clickButton(event) {
     const numClass = event.target.classList.value;
     const numKey = event.target.attributes["data-key"].value;
     const opClass = event.target.classList.value;
     const opKey = event.target.attributes["data-key"].value;
     const calcDisplay = document.querySelector(".display");

     switch (opKey) {
          case "divide":
               symbol = `÷`;
               break;
          case "multiply":
               symbol = `×`;
               break;
          case "add":
               symbol = `+`;
               break;
          case "subtract":
               symbol = `−`;
               break;
          default:
     }

     if (opClass === "clearB") {
          calcDisplay.textContent = `0`;
          num1 = null;
          strNum1 = "";
          num2 = null;
          strNum2 = "";
          operation = false;
     }

     //store first number input, concating onto outside string until an operation btn is pressed
     if (numClass === "numero" && operation == false) {
          strNum1 = strNum1 + numKey;
          num1 = numInput(strNum1);
          calcDisplay.textContent = `${num1}`;
     } else if (numClass === "numero" && operation == true) {
          strNum2 = strNum2 + numKey;
          num2 = numInput(strNum2);
          calcDisplay.textContent = `${num1}${symbol}${num2}`;
     }

     console.log(num1);

     // once operation button is pressed, move onto value 2
     if (opClass === "operation" && num1 >= 0) {
          operation = true;
          operator = opKey;
          calcDisplay.textContent = `${num1}${symbol}`;
          console.log(operator);
     }

     console.log(operation);
     console.log(num2);
     // once equal button is pressed, compute the values and store computed value as value 1 while resetting 2nd value
     if (num1 >= 0 && num2 >= 0 && opKey === "equal") {
          console.log("I made it!");
          result = arithmetic(num1, operator, num2);
          console.log(result);
          num1 = result;
          calcDisplay.textContent = `${num1}`;
          num2 = null;
          strNum2 = "";
          console.log(num2);
     }

     console.log(num1);

     // Display numbers and operator as they are pressed

     // Do your operation with 3 variables arithmetic()

     // Update display with result
}
