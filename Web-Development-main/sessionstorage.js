window.onload = function() {
    const name = sessionStorage.getItem("userName");
    if (name) {
        document.getElementById("welcomeMessage").innerText = `Welcome back, ${name}!`;
        document.getElementById("userName").style.display = "none";
        document.getElementById("submitButton").style.display = "none";
    }
};

function storeName() {
    const input = document.getElementById("userName");
    const name = input.value.trim();
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    sessionStorage.setItem("userName", name);
    document.getElementById("welcomeMessage").innerText = `Welcome, ${name}!`;
    input.style.display = "none";
    document.getElementById("submitButton").style.display = "none";
}
