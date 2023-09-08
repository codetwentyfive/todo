import './index.js';
import './dom.js';
import { taskUnit } from './dom.js';

//Function that toogles the active selection
export function activeSwitcher() {
    const activeSwitch = document.querySelectorAll(".activeSwitch");

    activeSwitch.forEach(item => {
        item.addEventListener("click", () => {
            // Remove active class from items
            activeSwitch.forEach(item => {
                item.classList.remove("active");
            });

            // Add "active" class to clicked item
            item.classList.add("active");
        })
    })
}

// Function to update the task title with strikethrough
export function updateTaskTitleStyle(taskItem, isChecked) {
    const titleElement = taskItem.querySelector("h3");
    if (isChecked) {
        titleElement.style.textDecoration = "line-through";
        taskItem.style.backgroundColor = "#544667"

    } else {
        titleElement.style.textDecoration = "none";
        taskItem.style.backgroundColor = "initial";
    }
}

// Function to toggle the checkbox when clicking inside a task item
export function toggleCheckboxOnClick(taskItem) {
    const checkbox = taskItem.querySelector(".task-checkbox");
    if (checkbox) {
        checkbox.checked = !checkbox.checked;
        
        // Get the task title from the task item
        const taskTitle = taskItem.querySelector("h3").textContent;
        
        // Find the corresponding task in local storage and update its completed status
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const updatedTasks = tasks.map((task) => {
            if (task.title === taskTitle) {
                task.completed = checkbox.checked;
            }
            return task;
        });
        
        // Save the updated tasks back to localStorage
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        
        // Call the updateTaskTitleStyle function to update the title style based on the checkbox state
        updateTaskTitleStyle(taskItem, checkbox.checked);
    }
}



// Event listener to handle checkbox changes
taskList.addEventListener("change", (e) => {
    if (e.target.classList.contains("task-checkbox")) {
        const taskItem = e.target.closest(".task-item");
        if (taskItem) {
            updateTaskTitleStyle(taskItem, e.target.checked);
        }
    }
});

export const stylingFunctions = {
    activeSwitcher,
    updateTaskTitleStyle,
    toggleCheckboxOnClick,
};
