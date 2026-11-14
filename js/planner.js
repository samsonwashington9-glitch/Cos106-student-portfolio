// Academic planner: arrays, functions, events, DOM updates and localStorage.
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("task-form");
  if (!form) return;

  const taskInput = document.getElementById("task-input");
  const dateInput = document.getElementById("task-date");
  const categoryInput = document.getElementById("task-category");
  const taskList = document.getElementById("task-list");
  const emptyState = document.getElementById("empty-state");
  const feedback = document.getElementById("task-feedback");
  const taskCount = document.getElementById("task-count");
  const remainingCount = document.getElementById("remaining-count");
  const completedCount = document.getElementById("completed-count");
  const filterButtons = document.querySelectorAll(".filter-button");

  let tasks = [];
  try {
    tasks = JSON.parse(localStorage.getItem("cos106Tasks")) || [];
    if (!Array.isArray(tasks)) tasks = [];
  } catch (error) {
    tasks = [];
  }
  let currentFilter = "all";

  function saveTasks() {
    localStorage.setItem("cos106Tasks", JSON.stringify(tasks));
  }

  function updateSummary() {
    const completed = tasks.filter(function (task) { return task.completed; }).length;
    const pending = tasks.length - completed;
    taskCount.textContent = tasks.length + (tasks.length === 1 ? " task" : " tasks");
    remainingCount.textContent = pending + " pending";
    completedCount.textContent = completed + " completed";
  }

  function renderTasks() {
    taskList.innerHTML = "";
    const visibleTasks = tasks.filter(function (task) {
      if (currentFilter === "active") return !task.completed;
      if (currentFilter === "completed") return task.completed;
      return true;
    });

    emptyState.hidden = visibleTasks.length > 0;
    if (tasks.length === 0) emptyState.textContent = "No tasks yet. Add your first academic task.";
    else if (visibleTasks.length === 0) emptyState.textContent = "There are no tasks in this filter.";

    visibleTasks.forEach(function (task) {
      const item = document.createElement("li");
      item.className = "task-item" + (task.completed ? " completed" : "");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.setAttribute("aria-label", "Mark " + task.title + " as completed");
      checkbox.addEventListener("change", function () {
        task.completed = checkbox.checked;
        saveTasks();
        renderTasks();
      });

      const details = document.createElement("div");
      const title = document.createElement("span");
      title.className = "task-title";
      title.textContent = task.title;
      const meta = document.createElement("span");
      meta.className = "task-meta";
      meta.textContent = task.category + (task.dueDate ? " · Due " + task.dueDate : "");
      details.append(title, meta);

      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-task";
      deleteButton.type = "button";
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("aria-label", "Delete " + task.title);
      deleteButton.addEventListener("click", function () {
        tasks = tasks.filter(function (savedTask) { return savedTask.id !== task.id; });
        saveTasks();
        renderTasks();
      });

      item.append(checkbox, details, deleteButton);
      taskList.appendChild(item);
    });
    updateSummary();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = taskInput.value.trim();
    if (!title) {
      feedback.textContent = "Please enter a task description.";
      taskInput.focus();
      return;
    }

    tasks.push({
      id: Date.now().toString(),
      title: title,
      dueDate: dateInput.value,
      category: categoryInput.value,
      completed: false
    });
    saveTasks();
    renderTasks();
    form.reset();
    feedback.textContent = "Task added successfully.";
    taskInput.focus();
  });

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      currentFilter = button.dataset.filter;
      filterButtons.forEach(function (filterButton) {
        filterButton.classList.toggle("active", filterButton === button);
      });
      renderTasks();
    });
  });

  renderTasks();
});
