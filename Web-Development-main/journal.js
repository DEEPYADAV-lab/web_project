window.onload = function() {
    loadEntries();
    };

function saveEntry() {
const text = document.getElementById("journalEntry").value.trim();
if (!text) {
alert("Please write something before saving.");
return;
}

const entry = {
content: text,
date: new Date().toLocaleString()
};

let journal = JSON.parse(localStorage.getItem("journal")) || [];
journal.unshift(entry);
localStorage.setItem("journal", JSON.stringify(journal));
document.getElementById("journalEntry").value = "";
loadEntries();
}

function loadEntries() {
const journal = JSON.parse(localStorage.getItem("journal")) || [];
const container = document.getElementById("entries");
container.innerHTML = "";

if (journal.length === 0) {
container.innerHTML = "<p>No entries yet.</p>";
return;
}

journal.forEach(entry => {
container.innerHTML += `
<div class="entry">
    <time>${entry.date}</time>
    <p>${entry.content}</p>
</div>
`;});
}
