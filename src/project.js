import { Task } from "./task.js";

export class Project {
    constructor(name, tasks = []) {
        this.name = name;
        this.tasks = tasks;
    }

    addTask(title, description, dueDate, priority) {
        this.tasks.push(new Task(title, description, dueDate, priority));
    }

    getTasks() {
        return [...this.tasks];
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
    }
}