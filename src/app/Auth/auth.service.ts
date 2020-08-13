import { environment } from './../../environments/environment';
import { User } from './user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable, Output } from '@angular/core'
import { throwError, Subject, ReplaySubject } from 'rxjs'
import { catchError, tap } from 'rxjs/operators';

export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    @Output()
    users = new ReplaySubject<User>();
    timeOutTimer:any;
    constructor(private http: HttpClient) { 
    }

    singUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+environment.firebaseAPIKey,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handlingError),
                tap(resData=>{
                    this.handlingUser(resData.email,resData.localId, resData.idToken, +resData.expiresIn);
                }))
    }

    autoLogin(){
        const userData:
        {
            email:string;
            id: string;
            _token: string;
            _expirationDate: string;
        }=JSON.parse(localStorage.getItem('userData'));
        if(!userData){
            return;
        }
        const existedUser =new User(userData.email,userData.id, userData._token,new Date(userData._expirationDate) );

        
        if(existedUser.token){
            this.users.next(existedUser);
            const timeOut=new Date(userData._expirationDate).getTime()-new Date().getTime();
            // this.autoLogOut(timeOut);
        }
        
    }
    logIn(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.firebaseAPIKey,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handlingError),
                tap(resData=>{
                    this.handlingUser(resData.email,resData.localId, resData.idToken, +resData.expiresIn);
                }))

    }
    LogOut(){
        this.users.next(null);
        localStorage.removeItem('userData');
        if(this.timeOutTimer){
             clearTimeout(this.timeOutTimer);
        }
       this.timeOutTimer=null;
    }
    autoLogOut(timeout: number){
      this.timeOutTimer =  setTimeout(() => {
            this.LogOut();
        }, timeout);
    }
    private handlingUser(email: string , localId: string, idToken: string, expiresIn: number){
        const expirationDate =new Date(new Date().getTime() + expiresIn );
        const user = new User(email,localId,idToken,expirationDate);
        this.users.next(user);
        this.autoLogOut(expiresIn*1000);
        localStorage.setItem('userData',JSON.stringify(user));
    }
    private handlingError(ErrorResponse: HttpErrorResponse) {

        let errorMessage = 'There is an error.';
        if (!ErrorResponse.error || !ErrorResponse.error.error) {
            return throwError(errorMessage)
        }
        switch (ErrorResponse.error.error.message) {
            case 'EMAIL_NOT_FOUND': errorMessage = 'This email is not registered yet.'; break;
            case 'INVALID_PASSWORD': errorMessage = 'Password is Invalid!'; break;
            default: errorMessage = ErrorResponse.error.error.message;
        }
        return throwError(errorMessage);
    }
}