function toggleLight() {
    let lightbulb = document.getElementById("lightbulb");
    if (lightbulb.src.includes("media/oFF_Bulb.jpg")) {
        lightbulb.src = "media/On_Blub.jpg";
    } else {
        lightbulb.src = "media/oFF_Bulb.jpg";
    }
}
