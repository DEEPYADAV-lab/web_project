document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name2").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("All fields are required!");
    } else {
        alert("Form submitted successfully!");
    }
});
