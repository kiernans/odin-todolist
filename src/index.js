import ToDoList from './todolist';

const todo = ToDoList('test', 'description', 'tmorrow', 1);

console.log(todo.getTitle());
console.log(todo.getNote());
console.log(todo.setNote("This is my note"));
console.log(todo.getNote());