import { Task } from "./task.js";
import { Project } from "./project.js";

const newProjectBtn = document.getElementById('new-project');
const homeBtn = document.getElementById('home');
const projects = [];

/*
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

    const projectContainer = document.createElement('div');
    const projectHeader = document.createElement('h1');
    const projectRemoveBtn = document.createElement('btn');

    projectHeader.textContent = defaultProject.name;
    projectRemoveBtn.textContent = 'Remove';

    projectRemoveBtn.addEventListener('click', function() {
        
    })
}
*/

function createNewProject(name) {
    const newProject = new Project(name);
    projects.push(newProject);
}

function deleteProject(projectId) {
    
}