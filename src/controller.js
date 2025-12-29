import { Task } from "./task.js";
import { Project } from "./project.js";

function initApp() {
    const newProjectBtn = document.getElementById('new-project');
    const homeBtn = document.getElementById('home');
    const projects = [];
    
    const defaultProject = new Project('Project One');
    const defaultTask = new Task('Clean dishes', 'Head to the kitchen and wash dishes before dinner', 'Tonight', 'High');

    projects.push(defaultProject);
    
    defaultProject.addTask(defaultTask);
    
    let activeProject = defaultProject;

    function renderProjects() {
        const sidebar = document.getElementById('project-list');
        sidebar.innerHTML = '';
        projects.forEach(project => {
            const projectItem = document.createElement('li');
            projectItem.textContent = project.name;
            projectItem.classList.add('project-item');
            projectItem.addEventListener('click', () => {
                activeProject = project;
                renderTasks();
                renderProjects();
            })

            if (project === activeProject) {
                projectItem.classList.add('active-project');
            }

            sidebar.appendChild(projectItem);
        });
    }
    
    function renderTasks() {
        const taskContainer = document.getElementById('task-container');
        const projectNameDisplay = document.getElementById('current-project-name');
    
        taskContainer.innerHTML = '';

        taskContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                const taskId = e.target.parentElement.dataset.id;
                activeProject.removeTaskById(taskId);
                renderTasks();
            }
        })
    
        projectNameDisplay.textContent = activeProject.name;
    
        activeProject.getTasks().forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.classList.add('task-card');
            taskElement.textContent = `${task.title} - ${task.dueDate}`;
            taskElement.dataset.id = task.id;

            const deleteTaskBtn = document.createElement('button');
            deleteTaskBtn.classList.add('delete-btn');
            deleteTaskBtn.textContent = 'Delete';

            taskElement.appendChild(deleteTaskBtn);

            taskContainer.appendChild(taskElement);
        });
    }

    
    function addTasks() {
        const addTaskBtn = document.getElementById('add-task-btn');
        const dialog = document.getElementById('task-modal');
    
        addTaskBtn.addEventListener('click', () => {
            dialog.showModal();
        })
        
        const submitTaskBtn = document.getElementById('submit-task');
        
        submitTaskBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const newTaskTitle = document.getElementById('task-title').value;
            const newTaskDesc = document.getElementById('task-desc').value;
            const newTaskDueDate = document.getElementById('task-date').value;
            const newTaskPriority = document.getElementById('task-priority').value;
    
            const newTask = new Task(newTaskTitle, newTaskDesc, newTaskDueDate, newTaskPriority);
            activeProject.addTask(newTask);
    
            document.getElementById('task-form').reset();
            dialog.close();
    
            renderTasks();
        })
    
    }

    renderProjects();
    renderTasks();
    addTasks();
}

export { initApp }