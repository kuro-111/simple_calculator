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
let operator;
let num2;

//make an input variable and keep track of user input next --to continue
//display the inputs on the html

function clickButton(event) {
     const numClass = event.target.classList.value;
     const numKey = event.target.attributes["data-key"].value;
     const opClass = event.target.classList.value;
     const opKey = event.target.attributes["data-key"].value;
     const calcDisplay = document.querySelector(".display");
     //store input for 1st number, operator, then 2nd number

     //store first number input
     if (numClass === "numero") {
          num1 = numInput(numKey);
     } else {
          num1 = 0;
     }

     console.log(num1);

     if (opClass === "operation" && num1 >= 0) {
          let operation = true;
          console.log(opKey);
     } else {
          return;
     }

     if ((operation = true)) {
     }
}
