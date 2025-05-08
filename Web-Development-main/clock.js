let clockInterval;
let isRunning = false;

function updateClock() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");
    document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;
}

document.getElementById("toggleClock").addEventListener("click", function() {
    if (!isRunning) {
        clockInterval = setInterval(updateClock, 1000);
        this.textContent = "Stop Clock";
    } else {
        clearInterval(clockInterval);
        this.textContent = "Start Clock";
    }
    isRunning = !isRunning;
});
