let taskCount = 0;
let tasksRemaining = 0;

// Function to update the task counter
function updateTaskCounter() {
  document.querySelector(".task-counter").textContent = `${tasksRemaining} of ${taskCount} remaining`;
}

// Function to add a task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  taskCount++;
  tasksRemaining++;
  updateTaskCounter();

  const taskList = document.getElementById("taskList");

  // Create task item elements
  const taskItem = document.createElement("li");
  taskItem.className = "task-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = () => toggleTaskCompletion(taskItem);

  const label = document.createElement("label");
  label.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "DEL";
  deleteButton.className = "delete-btn";
  deleteButton.onclick = () => deleteTask(taskItem);

  // Append elements to task item
  taskItem.appendChild(checkbox);
  taskItem.appendChild(label);
  taskItem.appendChild(deleteButton);

  // Add task item to the list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = "";
}

// Function to toggle task completion
function toggleTaskCompletion(taskItem) {
  const isChecked = taskItem.querySelector("input[type='checkbox']").checked;
  if (isChecked) {
    taskItem.classList.add("completed");
    tasksRemaining--;
  } else {
    taskItem.classList.remove("completed");
    tasksRemaining++;
  }
  updateTaskCounter();
}

// Function to delete a task
function deleteTask(taskItem) {
  const isCompleted = taskItem.classList.contains("completed");
  if (!isCompleted) tasksRemaining--;

  taskItem.remove();
  taskCount--;
  updateTaskCounter();
}

// Function to delete all tasks
function deleteAllTasks() {
  document.getElementById("taskList").innerHTML = "";
  taskCount = 0;
  tasksRemaining = 0;
  updateTaskCounter();
}
