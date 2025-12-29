export class Task {
    constructor(title, description, dueDate, priority, completed = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    }

    editTitle(newTitle) {
        this.title = newTitle;
    }

    editDescription(newDesc) {
        this.description = newDesc;
    }

    editDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    editPriority(newPriority) {
        this.priority = newPriority;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }
}