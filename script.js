//make buttons work
const buttons = document.querySelectorAll("button");
console.log(buttons);
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

function numInput(numKey) {
     {
          let num = 0;
          num = parseInt(numKey);
          return num;
     }
}

// (((12 + 4) - 10) * 2) = 12
//( n1 + n2 ) - (result - n3) * (result * 2)
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

//Make a function to randomize background color for buttons when hover
function rainbow(event) {
     let rgb = "#" + Math.random().toString(16).substr(-6);
     event.target.style.backgroundColor = rgb;
}

//Calculator function
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

     //clear button
     if (opClass === "clearB") {
          num1 = null;
          strNum1 = "";
          num2 = null;
          strNum2 = "";
          operation = false;
     }

     //be able to compute more than one operation at the same time
     if (operation == true && num2 >= 0 && opClass === "operation") {
          num1 = arithmetic(num1, operator, num2);
          num2 = null;
          strNum2 = "";
          console.log("you're here");
     }

     //store first number input, concating onto outside string until an operation btn is pressed
     if (numClass === "numero" && operation == false) {
          strNum1 = strNum1 + numKey;
          num1 = numInput(strNum1);
     } else if (numClass === "numero" && operation == true) {
          strNum2 = strNum2 + numKey;
          num2 != null;
          num2 = numInput(strNum2);
     }

     console.log(num1);

     // once operation button is pressed, move onto value 2
     if (opClass === "operation" && num1 >= 0) {
          operation = true;
          operator = opKey;
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
          num2 = null;
          strNum2 = "";
          console.log(num2);
     } else if (num2 == null && operation == false && opKey === "equal") {
          console.log("I am here.");
          calcDisplay.textContent == `${num1}`;
          return;
     }

     //Set display to not add the initial "0" when imputting num
     if (calcDisplay.textContent == "0") {
          calcDisplay.textContent = "";
     }

     //Set the display for calculator
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

     console.log(num1);

     // Display numbers and operator as they are pressed

     // Do your operation with 3 variables arithmetic()

     // Update display with result
}
