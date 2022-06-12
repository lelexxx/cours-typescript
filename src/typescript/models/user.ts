'use strict';

export default class User {
    private _firstName: string;
    private _lastName: string;
    protected _isAdmin: boolean = false; //typage non obligatoire car il est déterminé par le type de la valeur

    constructor(firstName: string, lastName: string){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    //setter fluent
    public setFristName(firstName: string): User{
        this._firstName = firstName;

        return this;
    }

    //setter fluent
    public setLastName(lastName: string): User{
        this._lastName = lastName;

        return this;
    }

    //getter standart par défaut public, indtroduit en JS classique depuis ES2015
    get firstName(): string{
        return this._firstName;
    }

    //getter standart par défaut public, indtroduit en JS classique depuis ES2015
    get lastName(): string{
        return this._lastName;
    }

    //getter standart par défaut public, indtroduit en JS classique depuis ES2015
    get isAdmin(): boolean{
        return this._isAdmin;
    }
}