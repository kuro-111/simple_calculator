//make buttons work
const buttons = document.querySelectorAll("button");
console.log(buttons);
buttons.forEach((button) => button.addEventListener("click", clickButton));



function numInput(numClass, number) { 
    if (numClass === "numero") {
      console.log("true :D");
      number = parseInt(numKey);
      console.log(number);
 }}


 function arithmetic(numInput1, opKey, number2) {
    if (opKey === "divide") {
        const divide = number / 
    }
}

//make an input variable and keep track of user input next

function clickButton(event) {
    const numInput1 = event.currentTarget;
    const numClass = event.target.classList.value;
    const numKey = event.target.attributes["data-key"].value;
    const opClass = event.target.classList.value;
    const opKey = event.target.attributes["data-key"].value;


     let number= 0;
    
    
     if (opClass === "operation") {
          const operation = true;
     }

     if (operation = true) {
       
     }
}



