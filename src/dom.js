import 
const dom = (()=> {

// DOM elements
const newTaskButton = document.getElementById("newTaskButton");
const taskForm = document.getElementById("taskForm");
const taskFormElement = document.getElementById("taskFormElement");
const taskList = document.getElementById("taskList");

// Get values from the form
const title = document.getElementById("title").value;
const description = document.getElementById("description").value;
const dueDate = document.getElementById("dueDate").value;
const priority = document.getElementById("priority").value;
const notes = document.getElementById("notes").value;
const checklist = document.getElementById("checklist").value;
}) 


export default dom;