function checkEvenOdd() {
    let num = parseInt(document.getElementById("number1").value);

    if (num % 2 === 0) {
        document.getElementById("output4").innerHTML = `${num} is Even.`;
    } else {
        document.getElementById("output4").innerHTML = `${num} is Odd.`;
    }
}

function printNumbers() {
    let num = parseInt(document.getElementById("number1").value);
    let output = "Numbers: ";

    for (let i = 1; i <= num; i++) {
        output += i + " ";
    }

    document.getElementById("output4").innerHTML = output;
}

function countDown() {
    let num = parseInt(document.getElementById("number1").value);
    let output = "Countdown: ";

    while (num >= 1) {
        output += num + " ";
        num--;
    }

    document.getElementById("output4").innerHTML = output;
}
