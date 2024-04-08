//in todo.js, define an ES6 module that exports a TodoList class.
//The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.


class TodoList {
    constructor()
    {
        this.tasks = [];
    }

    addTask(task){
        this.tasks.push({task, complete: false});
    }

    markAsComplete(index){
        if (index >= 0 && index < this.tasks.length) // range
        {
            this.tasks[index].complete = true;
        }
        else
        {
            console.log("Error: invalid range")
        }
    }

    listAllTasks() {
        return this.tasks.forEach(element => {
            console.log(`${element.task}. Is completed? ${element.complete}`);
        });
    }
}

module.exports = TodoList;