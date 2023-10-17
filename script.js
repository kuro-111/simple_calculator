//make buttons work
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", clickButton));
buttons.forEach((button) => button.addEventListener("mouseenter", rainbow));
buttons.forEach((button) =>
     button.addEventListener("mouseleave", (event) => {
          event.target.style.backgroundColor = "white";
     })
);

let num1;
let strNum1 = "";
let operator = "";
let num2;
let strNum2 = "";
let operation = false;
let result;
let symbol = "";

/**
 * Takes in a string, and parses it into a floating point number
 *
 * @param {string} numKey - String to parse into num
 * @returns {number} Parsed floating point number
 */
function numInput(numKey) {
     let num = 0;
     num = parseFloat(numKey);
     return num;
}

/**
 * takes in two number variable and a string and performs math fundamental operations
 *
 * @param {number} num1
 * @param {string} operator
 * @param {number} num2
 * @returns {number} Computed integer
 */
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

/**
 * Change the background of the buttons into random colors during hover
 *
 * @param {object} event
 * @returns {*} Doesn't return anything
 */
function rainbow(event) {
     let rgb = "#" + Math.random().toString(16).substr(-6);
     event.target.style.backgroundColor = rgb;
}

/**
 * Takes in user inputs and handles calculation, number parsing, displaying results, rounding off result
 * is a calculator
 * @param {object} event
 * @returns {*} doesn't return anything
 */
function clickButton(event) {
     const numClass = event.target.classList.value;
     const numKey = event.target.attributes["data-key"].value;
     const opClass = event.target.classList.value;
     const opKey = event.target.attributes["data-key"].value;
     const calcDisplay = document.querySelector(".display");

     // determine the symbols of the operators
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

     // check if clear button is pressed, reset display and variables
     if (opClass === "clearB") {
          num1 = null;
          strNum1 = "";
          num2 = null;
          strNum2 = "";
          operation = false;
     }

     // enable computation of more than one operation at the same time
     if (operation == true && num2 >= 0 && opClass === "operation") {
          num1 = arithmetic(num1, operator, num2);
          num2 = null;
          strNum2 = "";
     }

     // store first number input, concating onto outside string until an operation btn is pressed
     if (numClass === "numero" && operation == false) {
          strNum1 = strNum1 + numKey;
          num1 = numInput(strNum1);
     }
     // store second number input when operation has been pressed
     else if (numClass === "numero" && operation == true) {
          strNum2 = strNum2 + numKey;
          num2 != null;
          num2 = numInput(strNum2);
     }

     // check if operation button is pressed, move onto value 2
     if (opClass === "operation" && num1 >= 0) {
          operation = true;
          operator = opKey;
     }

     // check if equal button is pressed, compute the values and store computed value as value 1 while resetting 2nd value
     if (num1 >= 0 && num2 >= 0 && opKey === "equal") {
          result = arithmetic(num1, operator, num2);
          result = Math.round(result * 10) / 10;
          num1 = result;
          num2 = null;
          strNum2 = "";
     }
     // if equal button is pressed with no operator and 2nd variable, display the 1st variable
     else if (num2 == null && operation == false && opKey === "equal") {
          calcDisplay.textContent == `${num1}`;
          return;
     }

     // Set display to not add the initial "0" when imputting num
     if (calcDisplay.textContent == "0") {
          calcDisplay.textContent = "";
     }

     // Set the display for operators, result, clear, and numbers for calculator
     if (
          opKey == "divide" ||
          opKey == "multiply" ||
          opKey == "add" ||
          opKey == "subtract"
     ) {
          calcDisplay.textContent += `${symbol}`;
     } else if (opKey == "equal") {
          calcDisplay.textContent = `${result}`;
     } else if (opKey == "clear") {
          calcDisplay.textContent = `0`;
     } else {
          calcDisplay.textContent += `${opKey}`;
     }
}
