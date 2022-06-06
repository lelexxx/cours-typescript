'use strict';

import Todo from '../models/todo'
import User from '../models/user';

export default class TodoService {
    private _todos: Todo[] = [];

    public addTodo(todo: Todo): TodoService{
        this._todos.push(todo);

        return this;
    }

    public delete(user: User): TodoService {
        if(!user.isAdmin) //utilisation du getter défini dans la classe User
            return this;

        return this;
    }

    get todos(): Todo[]{
        return this._todos;
    }
}