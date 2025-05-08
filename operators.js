
function performOperations() {
    let a = parseFloat(document.getElementById("inputA").value);
    let b = parseFloat(document.getElementById("inputB").value);

    let addition = a + b;
    let subtraction = a - b;
    let multiplication = a * b;
    let division = b !== 0 ? (a / b).toFixed(2) : "Infinity (division by zero)";
    let modulus = b !== 0 ? a % b : "Undefined (modulus by zero)";

    let isGreater = a > b;
    let logicalCheck = (a > 5 && b < 10);

    let outputText = `
        <strong>Results:</strong><br>
        Addition (a + b) = ${addition} <br>
        Subtraction (a - b) = ${subtraction} <br>
        Multiplication (a * b) = ${multiplication} <br>
        Division (a / b) = ${division} <br>
        Modulus (a % b) = ${modulus} <br><br>
        Is 'a' greater than 'b'? ${isGreater} <br>
        Logical AND (a > 5 && b < 10): ${logicalCheck}
    `;

    document.getElementById("output1").innerHTML = outputText;
    }
