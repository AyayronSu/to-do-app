import { Task } from "./task.js";

export class Project {
    constructor(name, tasks = []) {
        this.name = name;
        this.tasks = tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    getTasks() {
        return [...this.tasks];
    }

    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }

    removeTaskById(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}