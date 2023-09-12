import './dom.js';
import './styles.css';
import { updateTaskTitleStyle, activeSwitcher, toggleCheckboxOnClick } from './style.js';

// preloaded tasks
const preloadedTasks = [
    {
        title: "Relax and code",
        dueDate: "2023-12-31",
        priority: "medium",
        description: "This is the first preloaded task.",
        completed: false,
    },
    {
        title: "Practice graditude",
        dueDate: "2023-11-15",
        priority: "high",
        description: "This is the second preloaded task.",
        completed: true,
    },
];

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
        completed: false,
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

    // Find the index of the task with the same title
    const taskIndex = existingTasks.findIndex((existingTask) => existingTask.title === task.title);

    if (taskIndex !== -1) {
        // Update the task if it exists
        existingTasks[taskIndex] = task;
    } else {
        // Add the new task to the existing tasks
        existingTasks.push(task);
    }

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

    // Use a label element to wrap the entire task item content
    taskItem.innerHTML = `
    <label class="task">
        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
        <h3 class="task-title">${task.title}</h3>
        <p class="due-date">${task.dueDate}</p>
        <p>Urgency: <br>${task.priority}</p>
        <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" /></svg>
        <button class="remove-task-button">❌</button>
    </label>
    `;

    // Add the task item to the task list
    taskList.appendChild(taskItem);

    // Add a click event listener to the Remove button
    const removeButton = taskItem.querySelector(".remove-task-button");
    removeButton.addEventListener("click", () => {
        removeTask(taskItem);
    });

    // Add a change event listener to the checkbox
    const checkbox = taskItem.querySelector(".task-checkbox");
    checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        saveTask(task); // Update the task status in localStorage
        updateTaskTitleStyle(taskItem, checkbox.checked);
    });

    // Update the task title style based on the initial checkbox state
    updateTaskTitleStyle(taskItem, task.completed);
}

// Function to load tasks from localStorage and display them
function loadTasks() {
    // Get user-added tasks from localStorage (if any)
    const userTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Check if the preloaded tasks have already been loaded
    let preloadedTasksLoaded = false;

    // Loop through all tasks and add them to the task list
    userTasks.forEach((task) => {
        // Check if the task is a preloaded task
        const isPreloadedTask = preloadedTasks.some((preloadedTask) => preloadedTask.title === task.title);

        if (isPreloadedTask && !preloadedTasksLoaded) {
            // Skip adding the preloaded tasks if they have already been loaded
            preloadedTasksLoaded = true;
        } else {
            addTaskToTaskList(task);
        }
    });
}



activeSwitcher();
// Load tasks when the page loads
window.addEventListener("load", loadTasks);
