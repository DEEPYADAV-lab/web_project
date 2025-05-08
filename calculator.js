function addab(a, b) {
    return a + b;
}
const subtract = function(a, b) {
    return a - b;
};
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? (a / b).toFixed(2) : "Cannot divide by zero";

function calculate() {
    let num2 = parseFloat(document.getElementById("num2").value) || 0;
    let num3 = parseFloat(document.getElementById("num3").value) || 0;
    let operation = document.getElementById("operation").value;
    let result;

    switch(operation) {
        case "add":
            result = addab(num2, num3);
            break;
        case "subtract":
            result = subtract(num2, num3);
            break;
        case "multiply":
            result = multiply(num2, num3);
            break;
        case "divide":
            result = divide(num2, num3);
            break;
        default:
            result = "Invalid Operation";
    }

    document.getElementById("output7").innerHTML = `Result: <strong>${result}</strong>`;
}
