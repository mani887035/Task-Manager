let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    let output = "";

    tasks.forEach((task, index) => {
        output += `
        <div class="task">
            <p class="${task.completed ? 'completed' : ''}">
                ${task.name}
            </p>

            <button onclick="toggleTask(${index})">
                ${task.completed ? "Undo" : "Complete"}
            </button>

            <button onclick="deleteTask(${index})">
                Delete
            </button>
        </div>
        `;
    });

    document.getElementById("taskList").innerHTML = output;
}

function addTask() {
    const input = document.getElementById("taskInput");

    if (input.value.trim() === "") {
        alert("Enter a task");
        return;
    }

    tasks.push({
        name: input.value,
        completed: false
    });

    input.value = "";

    saveTasks();
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;

    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);

    saveTasks();
    renderTasks();
}

renderTasks();