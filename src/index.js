import './styles.css';
import './style.js';


// DOM elements
const newTaskButton = document.getElementById("newTaskButton");
const taskForm = document.getElementById("taskForm");
const taskFormElement = document.getElementById("taskFormElement");
const taskList = document.getElementById("taskList");
const modal = document.getElementById("modal");

// Event listener for the "+ New Task" button
newTaskButton.addEventListener("click", (e) => {
    // Prevent the click event from propagating to the document
    e.stopPropagation();
    
    // Toggle the visibility of the task form and modal
    taskForm.classList.toggle("hidden");
    modal.classList.toggle("hidden");
});

// Event listener for the task form submission
taskFormElement.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Get values from the form
    const title = document.getElementById("title").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
    const description = document.getElementById("description").value;
    
    // Create a new task object
    const task = {
        title,
        dueDate,
        priority,
        description,
    };
    
    // Save the task to localStorage
    saveTask(task);
    
    // Add the task to the task list
    addTaskToTaskList(task);
    
    // Clear the form
    taskFormElement.reset();
    
    // Hide the form and modal
    taskForm.classList.add("hidden");
    modal.classList.add("hidden");
});

function closeModalOnClickOutside(event, modal, taskForm) {
    // Check if the modal is open and the click occurred outside of it
    if (!taskForm.contains(event.target) && !modal.contains(event.target)) {
        // Hide the form and modal
        taskForm.classList.add("hidden");
        modal.classList.add("hidden");
    }
}

// Event listener to close the modal when clicking outside of it
document.addEventListener("click", (e) => {
    closeModalOnClickOutside(e, modal, taskForm);
});

// Function to save a task to localStorage
function saveTask(task) {
    // Get existing tasks from localStorage (if any)
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    // Add the new task to the existing tasks
    existingTasks.push(task);

    // Save the updated tasks back to localStorage
    localStorage.setItem("tasks", JSON.stringify(existingTasks));
}

// Function to remove a task
function removeTask(taskItem) {
    // Remove the task item from the task list
    taskList.removeChild(taskItem);
    
    // Get the list of tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    // Find and remove the task from the tasks array based on some unique identifier (e.g., task title)
    const titleToRemove = taskItem.querySelector("h3").textContent;
    const updatedTasks = tasks.filter((task) => task.title !== titleToRemove);
    
    // Save the updated tasks back to localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

// Function to add a task to the task list
function addTaskToTaskList(task) {
    // Create a new task item
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
    <input type="checkbox" class="task-checkbox">
    <h3>${task.title}</h3>
    <p>Due Date: ${task.dueDate}</p>
    <p>Priority: ${task.priority}</p>
    <p>Description: ${task.description}</p>
    <button class="remove-task-button">Remove</button> <!-- Add a Remove button -->
    `;
    
    // Add the task item to the task list
    taskList.appendChild(taskItem);
    
    // Add a click event listener to the Remove button
    const removeButton = taskItem.querySelector(".remove-task-button");
    removeButton.addEventListener("click", () => {
        removeTask(taskItem);
    });
}



// Function to load tasks from localStorage and display them
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    // Loop through the tasks and add them to the task list
    tasks.forEach((task) => {
        addTaskToTaskList(task);
    });
}
// Load tasks when the page loads
window.addEventListener("load", loadTasks);
