
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;
    let name = document.getElementById("name3").value.trim();
    let email = document.getElementById("email1").value.trim();
    let password = document.getElementById("password1").value.trim();
    if (name === "") {
        document.getElementById("nameError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }
    if (password.length < 6) {
        document.getElementById("passwordError").style.display = "block";
        valid = false;
    } else {
        document.getElementById("passwordError").style.display = "none";
    }
    if (valid) {
        alert("Form submitted successfully!");
    }
});