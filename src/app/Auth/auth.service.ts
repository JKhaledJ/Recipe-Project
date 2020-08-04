import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core'

interface AuthResponseData{
    idToken:string;
    email: string;
    refreshToken: string;
    expiresIn : string;
    localId: string;
}

@Injectable({providedIn:'root'})
export class AuthService{
    constructor(private http: HttpClient){}

    singUp(email: string, password: string){
       return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAssvnCNK9pqMyqj64PGi_0iusfZqN-p4s',
        {
            email:email,
            password: password,
            returnSecureToken: true
        }
        )
    }
}