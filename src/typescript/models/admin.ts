'use strict';

import User from './user'

export default class Admin extends User {

    constructor(firstName: string, lastName: string){
        super(firstName, lastName); //appel du constructeur parent
        this._isAdmin = true;
    }
}