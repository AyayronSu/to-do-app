import { Task } from "./task.js";
import { Project } from "./project.js";

const newProjectBtn = document.getElementById('new-project');
const homeBtn = document.getElementById('home');
const projects = [];

newProjectBtn.addEventListener('click', function() {
    const newProjectInput = document.createElement('div');

    const newProjectName = document.createElement('input');
    newProjectName.setAttribute('type', 'text');
    newProjectName.setAttribute('id', 'newProjectName');
    newProjectName.setAttribute('placeholder', 'Name...');

    const saveNewProject = document.createElement('button');
    saveNewProject.textContent = 'Save';

})

function initialize() {
    const defaultProject = new Project('Project Alpha');
    projects.push(defaultProject);
}