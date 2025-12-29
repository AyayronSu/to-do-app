import { Task } from "./task.js";
import { Project } from "./project.js";

const newProject = new Project('Test Project');

newProject.addTask('test title', 'test desc', 'test due date', 'test priority');

