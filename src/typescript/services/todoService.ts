'use strict';

import Todo from '../models/todo';
import User from '../models/user';

export default class TodoService {
    private _todos: Todo[] = [];

    public addTodo(todo: Todo): TodoService {
        this._todos.push(todo);

        return this;
    }

    public deleteTodo(todo: Todo, user: User): boolean {
        if(!user.isAdmin) //utilisation du getter défini dans la classe User
            return false;

        this._todos = this._todos.filter(function(currentTodo){ 
            return currentTodo.label != todo.label; 
        });
    
        return true;
    }

    get todos(): Todo[]{
        return this._todos;
    }
}