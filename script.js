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

function arithmetic(num1, opKey, num2) {
     if (opKey === "divide") {
          const divide = num1 / num2;
          return divide;
     } else if (opKey === "multiply") {
          const multiply = num1 * num2;
          return multiply;
     } else if (opKey === "add") {
          const add = num1 + num2;
          return add;
     } else if (opKey === "subtract") {
          const subtract = num1 - num2;
          return subtract;
     }
}

let num1;
let strNum1 = "";
let operator;
let num2;
let strNum2 = "";
let operation = false;

//make an input variable and keep track of user input next --to continue
//display the inputs on the html

function clickButton(event) {
     const numClass = event.target.classList.value;
     const numKey = event.target.attributes["data-key"].value;
     const opClass = event.target.classList.value;
     const opKey = event.target.attributes["data-key"].value;
     const calcDisplay = document.querySelector(".display");

     //store input for 1st number, operator, then 2nd number

     //store first number input, concating onto outside string until an operation btn is pressed
     if (numClass === "numero" && operation == false) {
          strNum1 = strNum1 + numKey;
          num1 = numInput(strNum1);
     } else {
          num1 = 0;
     }

     console.log(num1);
     // once operation button is pressed, move onto value 2
     if (opClass === "operation" && num1 >= 0) {
          operation = true;
          console.log(opKey);
     } else {
          return;
     }

     console.log(operation);

     // If operation btn pressed, start building out second string
     if (operation == true) {
          strNum2 = strNum2 + numKey;
          num2 = numInput(strNum2);
     }

     // Display numbers and operator as they are pressed

     // Do your operation with 3 variables arithmetic()

     // Update display with result
}
