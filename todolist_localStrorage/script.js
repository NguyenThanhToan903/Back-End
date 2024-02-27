const button = document.querySelector("#button");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTask();
}

function displayTask() {
  const taskList = document.querySelector("#taskList");
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");
    li.textContent = tasks[i];

    li.setAttribute("data-index", i);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.addEventListener("click", function () {
      const index = parseInt(this.parentElement.getAttribute("data-index"));
      deleteTask(index);
    });
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  }
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value;
  if (task !== "") {
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
  }
  displayTask();
}

displayTask();

button.addEventListener("click", addTask);
