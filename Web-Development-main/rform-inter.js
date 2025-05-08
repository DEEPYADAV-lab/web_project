document.getElementById("Form1").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let valid = true;
    let name = document.getElementById("name5").value;
    let email = document.getElementById("email5").value;
    let password = document.getElementById("password5").value;

    if (name === "") {
        document.getElementById("nameError5").style.display = "block";
        document.getElementById("name5").style.borderColor = "red";
        valid = false;
    } else {
        document.getElementById("nameError5").style.display = "none";
        document.getElementById("name5").style.borderColor = "green";
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError5").style.display = "block";
        document.getElementById("email5").style.borderColor = "red";
        valid = false;
    } else {
        document.getElementById("emailError5").style.display = "none";
        document.getElementById("email5").style.borderColor = "green";
    }

    if (password.length < 6) {
        document.getElementById("passwordError5").style.display = "block";
        document.getElementById("password5").style.borderColor = "red";
        valid = false;
    } else {
        document.getElementById("passwordError5").style.display = "none";
        document.getElementById("password5").style.borderColor = "green";
    }

    if (valid) {
        document.getElementById("Form1").style.display = "none";
        document.getElementById("popup").style.display = "block";
    }
});
function closePopup() {
document.getElementById("popup").style.display = "none";
document.getElementById("Form1").reset();
document.getElementById("Form1").style.display = "block";
}
