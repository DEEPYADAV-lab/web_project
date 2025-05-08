function togglePassword() {
    let passwordField = document.getElementById("passwords");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        event.target.textContent = "Hide Password";
    } else {
        passwordField.type = "password";
        event.target.textContent = "Show Password";
    }
}
