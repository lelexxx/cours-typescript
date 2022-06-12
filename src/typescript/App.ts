import Admin from './models/admin';
import Todo from './models/todo';
import User from './models/user';
import TodoService from './services/todoService';

const user = new User('Alex', 'Ruiz');
const admin = new Admin('Admin', 'Admin');
const todoService = new TodoService();
let todo = new Todo('Cours TS');

todo.close(user);
let todos = todoService.addTodo(todo).todos;
console.log(todos);

console.log(todoService.deleteTodo(todo, user));
console.log(todoService.deleteTodo(todo, admin));
todos = todoService.todos;
console.log(todos);