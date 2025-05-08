function displayProfile() {
    let userName = document.getElementById("name1").value;
    let userAge = parseInt(document.getElementById("age").value);
    let isStudent = document.getElementById("isStudent").value === "true";

    document.getElementById("output5").innerHTML = `
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Age:</strong> ${userAge}</p>
        <p><strong>Student Status:</strong> ${isStudent ? "Yes" : "No"}</p>`;}
