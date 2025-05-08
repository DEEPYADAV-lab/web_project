function submitFeedback() {
    const name = document.getElementById("feedbackName").value.trim();
    const rating = document.getElementById("rating").value;
    const feedback = document.getElementById("feedback").value.trim();

    if (!name || !rating || !feedback) {
      alert("Please fill in all fields.");
      return;
    }

    const card = document.createElement("div");
    card.className = "feedback-card";
    card.innerHTML = `
      <strong>${name}</strong> rated us ${rating}<br>
      <p>${feedback}</p>
    `;

    document.getElementById("feedbackList").appendChild(card);
    document.getElementById("name").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("feedback").value = "";
  }
