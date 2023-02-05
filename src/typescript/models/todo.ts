'use strict';

import Constants from '../constants';
import User from './user';

export default class Todo {
    private _label: string; //par défaut les attributs sont 'public'
    private _isDone: boolean;
    private _doneBy: User;

    //constructeur
    constructor(label: string)
    //constructeur surchargé avec valeur par défaut
    constructor(label: string = Constants.DEFAULT_LABEL, isDone: boolean = false){
        this._label = label;
        this._isDone = isDone;
    }

    //setter standart par défaut public, indtroduit en JS classique depuis ES2015
    set isDone(isDone: boolean){
        this._isDone = isDone;
    }

    //getter standart par défaut public, indtroduit en JS classique depuis ES2015
    get isDone(): boolean{
        return this._isDone;
    }

    //getter standart par défaut public, indtroduit en JS classique depuis ES2015
    get label(): string{
        return this._label;
    }

    //getter standart par défaut public, indtroduit en JS classique depuis ES2015
    get doneBy(): User{
        return this._doneBy;
    }

    //méthode fluent
    public close(user: User): this {
        if(this._isDone)
            return this;

        this._isDone = true;
        this._doneBy = user;

        return this;
    }
}