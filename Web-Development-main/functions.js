function calculateSquare() {
    let num1 = document.getElementById("num1").value;
    let square = num1 * num1;
    document.getElementById("output6").innerHTML = `Square of ${num1} is ${square}`;
}
const add = (a, b) => a + b;
function addNumbers() {
    let num_1 = parseInt(prompt("Enter first number:"));
    let num_2 = parseInt(prompt("Enter second number:"));
    let sum = add(num_1, num_2);
    document.getElementById("output6").innerHTML = `Sum of ${num_1} and ${num_2} is ${sum}`;
}
function checkEvenOdd1() {
    let num1 = document.getElementById("num1").value;
    let result = (num1 % 2 === 0) ? "Even" : "Odd";
    document.getElementById("output6").innerHTML = `${num1} is ${result}`;
}
