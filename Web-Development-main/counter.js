let count = 0;
const counterDisplay = document.getElementById("counterDisplay");

document.getElementById("incrementBtn").addEventListener("click", function() {
    count++;
    counterDisplay.innerText = count;
});

document.getElementById("decrementBtn").addEventListener("click", function() {
    count--;
    counterDisplay.innerText = count;
});

document.getElementById("resetBtn").addEventListener("click", function() {
    count = 0;
    counterDisplay.innerText = count;
});