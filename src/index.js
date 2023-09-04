import './styles.css';
import { activeSwitcher } from './style';


activeSwitcher();


// DOM elements
const newTaskButton = document.getElementById("newTaskButton");
const taskForm = document.getElementById("taskForm");
const taskFormOverlay = document.getElementById("taskFormOverlay")
const taskFormElement = document.getElementById("taskFormElement");
const taskList = document.getElementById("taskList");

// Event listener for the "+ New Task" button
newTaskButton.addEventListener("click", () => {

    taskForm.classList.remove("hidden");


});

// Event listener for the task form submission
taskFormElement.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get values from the form
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
    const notes = document.getElementById("notes").value;
    const checklist = document.getElementById("checklist").value;

    // Create a new task object (you can further encapsulate this into a Task class)
    const task = {
        title,
        description,
        dueDate,
        priority,
        notes,
        checklist
    };

    //Svae the task to localStorage
    saveTask(task);

    //add the task to the task list
    addTaskToTaskList(task);

    // Clear the form
    taskFormElement.reset();

    // Hide the form
    taskForm.classList.add("hidden");


});

function saveTask(task) {
    //Get exisiting task from localStorage(if any)
    const exisitingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    //Add new task to the existing tasks
    exisitingTasks.push(task);

    //Save the updated tasks back to localStorage
    localStorage.setItem("tasks", JSON.stringify(exisitingTasks));

}

function addTaskToTaskList(task) {
    //Create a new task item
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
        < h3 > ${task.title}</h3 >
    <p>Description: ${task.description}</p>
    <p>Due Date: ${task.dueDate}</p>
    <p>Priority: ${task.priority}</p>
    <p>Notes: ${task.notes}</p>
    <p>Checklist: ${task.checklist}</p>
    `;

    //add the task item to the task list
    taskList.appendChild(taskItem);
}

function loadTasks(){
    const tasks =JSON.parse(localStorage.getItem("tasks")) || [];

    //Loop through the tasks and add them to the task list
    tasks.forEach((task) => {
        addTaskToTaskList(task);
    });
}

window.addEventListener("load", loadTasks);