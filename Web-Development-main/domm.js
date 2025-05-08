
function changeHeading() {
    const options = [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Strive not to be a success, but rather to be of value. - Albert Einstein",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
            "It does not matter how slowly you go as long as you do not stop. - Confucius",
            "Our greatest glory is not in never failing, but in rising up every time we fail. - Ralph Waldo Emerson",
            "The journey of a thousand miles begins with a single step. - Lao Tzu",
            "Believe you can and you're halfway there. - Theodore Roosevelt",
            "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston S. Churchill",
            "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
            "The best way to predict the future is to create it. - Peter Drucker"
    ];
    const randomIndex = Math.floor(Math.random() * options.length);
    document.getElementById("domHeading").innerText = options[randomIndex];
}

function addNewParagraph() {
const p = document.createElement("p");
p.innerText = "This is a new paragraph!";
document.getElementById("domContent").appendChild(p);
}
document.addEventListener('DOMContentLoaded', function() {
const darkModeButton = document.getElementById('darkmodetoggle');
const toggleDarkModeImage = document.getElementById('toggle-dark-mode');
darkModeButton.addEventListener('click', function() {
  toggleDarkModeImage.click();
});
});
