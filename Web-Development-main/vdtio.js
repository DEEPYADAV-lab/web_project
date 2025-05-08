
function displayValues() {
    let myName = document.getElementById("name").value;
    let myNumber = parseInt(document.getElementById("number").value) + 10;
    let isStudent = document.querySelector('input[name="isStudent"]:checked')?.value === "true";

    console.log("My Name:", myName);
    console.log("My Number:", myNumber);
    console.log("Boolean Value:", isStudent);

    document.getElementById("output").innerHTML = `
        <p>My Name: ${myName}</p>
        <p>My Number + 10 : ${myNumber}</p>
        <p>Boolean Value: ${isStudent}</p>
    `;
}
