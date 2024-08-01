const addButton = document.getElementById("addButton");
const newTaskInput = document.getElementById("newTaskInput");
const listOfTasks = document.getElementById("listOfTasks");

const tasksArray = ["task 1", "task 2"];

document.addEventListener("click", function() {
    console.log(event.clientX + " " + event.clientY);
});

function render() {
    for (let task of tasksArray) {
        insertTask(task);
    }
}
render();

addButton.onclick = function() {
    if (newTaskInput.value.length === 0) {
        console.log("nothing to add");
        return;
    }
    console.log("adding new task: " + newTaskInput.value);
    insertTask(newTaskInput.value);
    tasksArray.push(newTaskInput.value);
    newTaskInput.value = "";
}

function insertTask(value) {
    let newTask = value.toUpperCase();
    listOfTasks.insertAdjacentHTML(
        "beforeend",
        `
        <li class="task-element">
            <span>${newTask}</span>
        </li>
        `
    );
}

listOfTasks.onclick = function() {
    let finishedTask = document.elementFromPoint(event.clientX, event.clientY);
    console.log("you completed this task: " + finishedTask.textContent);
    completeTask(finishedTask);
}

function completeTask(completedTask) {
    completedTask.style.textDecoration = "line-through";
}
