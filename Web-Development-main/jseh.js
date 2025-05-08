let keyLogger = document.getElementById("keyLogger");
keyLogger.addEventListener("keydown", function(event) {
    console.log("Key Pressed:", event.key);
});
let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function(event) {
    let inputField = myForm.querySelector('input[type="text"]');
    if (!inputField.value.trim()) {
        event.preventDefault();
        alert("Form submission prevented! Please enter a value.");
    } else {
        alert("Form submitted successfully!");
    }
});
