import './index.js';

function activeSwitcher() {
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
function updateTaskTitleStyle(taskItem, isChecked) {
    const titleElement = taskItem.querySelector("h3");
    if (isChecked) {
        titleElement.style.textDecoration = "line-through";
    } else {
        titleElement.style.textDecoration = "none";
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
};
