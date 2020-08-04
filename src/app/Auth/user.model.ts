export class User{
    constructor(public email: string,
                public id: string,
                private _token: string,
                private _expirationDate: Date
                ){}

    get token(){
       return this._token; 
    }
    get expirationDate(){
        return this._expirationDate;
    }
}