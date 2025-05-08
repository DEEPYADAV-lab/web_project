function checkEvenOdd() {
    let num = document.getElementById("number1").value;
    if (num % 2 === 0) {
        document.getElementById("output4").innerHTML = `${num} is Even.`;
    } else {
        document.getElementById("output4").innerHTML = `${num} is Odd.`;
    }
}

function printNumbers() {
    let output = "Numbers: ";
    for (let i = 1; i <= 10; i++) {
        output += i + " ";
    }
    document.getElementById("output4").innerHTML = output;
}

function countDown() {
    let i = 5;
    let output = "Countdown: ";
    while (i >= 1) {
        output += i + " ";
        i--;
    }
    document.getElementById("output4").innerHTML = output;
}
