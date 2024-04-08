//In app.js, import the TodoList class from the todo.js module.
//Create an instance of the TodoList class.
//Add a few tasks, mark some as complete, and list all tasks.
//Run app.js and verify that the todo list operations are working correctly.


const TodoList = require("./todo.js");

const todoList = new TodoList;
todoList.addTask('Make portfolio site');
todoList.addTask('Finish homework');

console.log(todoList.listAllTasks());

todoList.markAsComplete(0);
console.log(todoList.listAllTasks());