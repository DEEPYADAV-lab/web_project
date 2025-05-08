function changeColour() {
    let colours = ["lightsalmon", "lightseagreen", "lightskyblue", "lightsteelblue", "lightslategray", "lightcyan", "lightcoral", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightslategray", "lightyellow"];
    let randomColour = colours[Math.floor(Math.random() * colours.length)];
    document.getElementById("colourBox").style.backgroundColor = randomColour;
    }

function addItems() {
    let input = document.getElementById("itemInputs").value;
    if (input === "") {
        alert("Please enter a task!");
        return;
    }      

    let li = document.createElement("li");
    li.innerHTML = `${input} <button onclick="removeItem(this)">⛔</button>`;
    document.getElementById("taskLists").appendChild(li);

    document.getElementById("itemInputs").value = "";
}

function removeItem(element) {
    element.parentElement.remove();
}
