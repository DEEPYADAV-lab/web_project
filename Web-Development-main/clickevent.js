document.getElementById("colorButton").addEventListener("click", function() {
    const colors = ['red', 'blue', 'black'];
    let currentColor = this.style.backgroundColor;
    let nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
    this.style.backgroundColor = nextColor;
    });
