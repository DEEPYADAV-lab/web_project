function updateColor() {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;

    document.getElementById("redValue").innerText = red;
    document.getElementById("greenValue").innerText = green;
    document.getElementById("blueValue").innerText = blue;

    let rgbColor = `rgb(${red}, ${green}, ${blue})`;

    const changeColor = (color) => {
        document.getElementById("colorBox").style.backgroundColor = color;
    };
    changeColor(rgbColor);
}
