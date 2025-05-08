window.onload = function() {
    displayNote();
  };
  function saveNote() {
    const note = document.getElementById("noteInput").value;
    localStorage.setItem("savedNote", note);
    displayNote();
  }
  function clearNote() {
    localStorage.removeItem("savedNote");
    displayNote();
  }
  function displayNote() {
    const saved = localStorage.getItem("savedNote");
    const display = document.getElementById("displayNote");
    if (saved && saved.trim() !== "") {
      display.innerHTML = `<strong>Your Saved Note:</strong><br>${saved}`;
    } else {
      display.innerHTML = "No note saved yet.";
    }
  }
