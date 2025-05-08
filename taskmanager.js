
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
      <span onclick="toggleComplete(this)">${taskText}</span>
      <button type="button" class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }

  function toggleComplete(element) {
    element.classList.toggle("completed");
  }

  function deleteTask(button) {
    button.parentElement.remove();
  }