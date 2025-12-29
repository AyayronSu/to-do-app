import { Task } from "./task.js";
import { Project } from "./project.js";

const newProjectBtn = document.getElementById('new-project');
const homeBtn = document.getElementById('home');
const projects = [];

const defaultProject = new Project('Project One');
const defaultTask = new Task('Clean dishes', 'Head to the kitchen and wash dishes before dinner', 'Tonight', 'High');

defaultProject.addTask(defaultTask);

let activeProject = defaultProject;

function renderTasks() {
    const taskContainer = document.getElementById('task-container');
    const projectNameDisplay = document.getElementById('current-project-name');

    taskContainer.innerHTML = '';

    projectNameDisplay.textContent = activeProject.name;

    activeProject.getTasks().forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task-card');
        taskElement.textContent = `${task.title} - ${task.dueDate}`;
        taskElement.dataset.id = task.id;
        taskContainer.appendChild(taskElement);
    });
}

renderTasks();