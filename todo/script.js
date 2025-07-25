document.getElementById("addBtn").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <span>${taskText}</span>
    <div class="actions">
      <button class="complete" onclick="toggleComplete(this)">✔</button>
      <button class="delete" onclick="deleteTask(this)">🗑</button>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function deleteTask(button) {
  const li = button.parentElement.parentElement;
  li.remove();
}

function toggleComplete(button) {
  const li = button.parentElement.parentElement;
  li.classList.toggle("completed");
}
