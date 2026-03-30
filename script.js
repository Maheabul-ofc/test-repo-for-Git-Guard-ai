// Simple Task Manager Application
class TaskManager {
    constructor() {
        this.tasks = [];
        this.taskId = 1;
    }

    addTask(title, description) {
        const task = {
            id: this.taskId++,
            title,
            description,
            completed: false,
            createdAt: new Date()
        };
        this.tasks.push(task);
        return task;
    }

    completeTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
        }
        return task;
    }

    removeTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
    }

    getTasks() {
        return this.tasks;
    }

    getCompletedTasks() {
        return this.tasks.filter(t => t.completed);
    }

    getPendingTasks() {
        return this.tasks.filter(t => !t.completed);
    }

    updateTask(id, updates) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            Object.assign(task, updates);
        }
        return task;
    }
}

// Example usage
const manager = new TaskManager();
manager.addTask('Learn JavaScript', 'Study ES6 features');
manager.addTask('Build a Project', 'Create a task manager');
console.log(manager.getTasks());
manager.completeTask(1);
console.log(manager.getCompletedTasks());