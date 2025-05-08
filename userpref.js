document.addEventListener('DOMContentLoaded', function() {
    loadPreferences();
});

function savePreferences() {
    const theme = document.getElementById("themeSelect").value;
    const fontSize = document.getElementById("fontSizeSelect").value;

    localStorage.setItem("theme", theme);
    localStorage.setItem("fontSize", fontSize);

    applyPreferences(theme, fontSize);
     alert("Preferences saved!");
}

function loadPreferences() {
    const theme = localStorage.getItem("theme") || "light";
    const fontSize = localStorage.getItem("fontSize") || "18px";

    document.getElementById("themeSelect").value = theme;
    document.getElementById("fontSizeSelect").value = fontSize;

    applyPreferences(theme, fontSize);
}

function applyPreferences(theme, fontSize) {
    const hold = document.querySelector(".hold");
    hold.className = theme === "dark" ? "hold dark" : "hold";
    document.getElementById("demoText").style.fontSize = fontSize;
}
