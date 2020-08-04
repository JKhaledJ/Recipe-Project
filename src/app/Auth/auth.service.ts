import { User } from './user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable, Output } from '@angular/core'
import { throwError, Subject } from 'rxjs'
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
    users = new Subject<User>();

    constructor(private http: HttpClient) { }

    singUp(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAssvnCNK9pqMyqj64PGi_0iusfZqN-p4s',
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
    logIn(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAssvnCNK9pqMyqj64PGi_0iusfZqN-p4s',
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
    private handlingUser(email: string , localId: string, idToken: string, expiresIn: number){
        const expirationDate =new Date(new Date().getTime() + expiresIn );
        const user = new User(email,localId,idToken,expirationDate);
        this.users.next(user);
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