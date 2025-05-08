function calculateGrade() {
    let marks = document.getElementById("marks").value;
    let grade;

    if (marks > 100) {
        grade = "Error: Marks cannot exceed 100.";
    } else if (marks < 0) {
        grade = "Error: Marks cannot be negative.";
    } else if (marks >= 95) {
        grade = "A+ (Outstanding)";
    } else if (marks >= 90) {
        grade = "A+";
    } else if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 60) {
        grade = "C";
    } else if (marks >= 50) {
        grade = "D";
    } else if (marks >= 0) {
        grade = "F (Fail)";
    }

    document.getElementById("result").innerHTML = `Your Grade: <strong>${grade}</strong>`;
}
