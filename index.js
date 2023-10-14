let calculate = document.getElementById("calculate");

const numberButtons = document.getElementById("number");
const button = document.getElementById("button");

const DeleteAll = document.getElementById("DeleteAll");
const Delete = document.getElementById("Delete");

const division = document.getElementById("division");
const multiplication = document.getElementById("multiplication");

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const plusminus = document.getElementById("plusminus");

const dot = document.getElementById("dot");
const equals = document.getElementById("equals");

let a = ""; //Первая цифра
let b = ""; // Вторая цифра
let sign = ""; //Умножение, деление, плюс и т.д.
const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]; //все цифры в Html
const element = ["/", "+", "-", "±", "✕"]; //Все элементы в Html

let currentInput = "";

function updateDisplay() {
  calculate.textContent = currentInput || "0";
}

outerHeight.textContent = "0";

button.addEventListener("click", (event) => {
  const key = event.target.textContent;

  equals.addEventListener("click", () => {
    b = currentInput;
    if (key === "/") {
      currentInput = a / b;
    } else if (key === "-") {
      currentInput = a - b;
    } else if (key === "+") {
      currentInput = Number(a) + Number(b);
    } else if (key === "✕") {
      currentInput = a * b;
    }
    updateDisplay();
  });
  if (digit.includes(key)) {
    if (b === "") {
      currentInput += key;
      updateDisplay();
    } else {
      currentInput += key;
      updateDisplay();
    }
  }
  if (element.includes(key)) {
    a = currentInput;
    sign = key;
    currentInput = "";
    // currentInput = sign;
    updateDisplay();
  }
});
DeleteAll.addEventListener("click", () => {
  currentInput = "";
  a = "";
  b = "";
  sign = "";
  updateDisplay();
});

Delete.addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
  // calculate.textContent = Number(button.slice(-1))
});
updateDisplay();