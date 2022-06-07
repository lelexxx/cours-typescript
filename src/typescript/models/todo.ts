'use strict';

import Constants from '../constants'

export default class Todo {
    private _label: string; //par défaut les attributs sont 'public'
    private _isDone: boolean;

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

    //méthode fluent
    public close(): Todo {
        this._isDone = true;

        return this;
    }
}