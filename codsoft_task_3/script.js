let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
const operators = ["+", "-", "*", "/"];

const display = document.getElementById("display");

let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    let value = event.target.innerHTML;

    if (operators.includes(value)) {
      operator = value;
      display.textContent = `${firstNumber} ${operator}`;
      return;
    } else if (value === "AC") {
      firstNumber = "";
      secondNumber = "";
      result = "";
      operator = "";
      display.textContent = "0";
      return;
    } else if (value === "DEL") {
      if (operator === "") {
        firstNumber = firstNumber.slice(0, firstNumber.length - 1);
      } else if (secondNumber === "") {
        operator = "";
      } else {
        secondNumber = secondNumber.slice(0, secondNumber.length - 1);
      }
      display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    } else if (value === "=") {
      let a = Number(firstNumber);
      let b = Number(secondNumber);

      switch (operator) {
        case "/":
          if (b === 0) {
            display.textContent = "Can't divide by zero";
            return;
          } else {
            result = a / b;
          }
          break;
        case "*":
          result = a * b;
          break;
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
      }
      firstNumber = result.toString();
      operator = "";
      result = "";
      secondNumber = "";
      display.textContent = `${firstNumber}`;
      return;
    } else if (operator === "") {
      firstNumber += value;
    } else {
      secondNumber += value;
    }
    display.textContent = `${firstNumber} ${operator} ${secondNumber} ${result}`;
  });
});
