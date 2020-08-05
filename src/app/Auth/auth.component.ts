import { AuthService, AuthResponseData } from './auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
    selector:'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent{
 isLogIn = true;
 isLoading =false;
 error : string = null;
 constructor(private authService: AuthService, private router: Router){}
 onSwitchMode(){
     this.isLogIn= !this.isLogIn;
 }
 onSubmit(form: NgForm){
    const email= form.value.email;
    const password = form.value.password;
    let authObservable : Observable<AuthResponseData>;

    if(!form.valid){
        return;
    }
    if(this.isLogIn){
       
        this.isLoading=true;
        authObservable = this.authService.logIn(email,password);
       
    }
    else{
        this.isLoading=true;
        authObservable = this.authService.singUp(email,password);
    }
    
    authObservable.subscribe(
        responseData=>{
            
            this.error= '';
            this.isLoading=false;
            this.router.navigate(['/recipes'])
        },
        errorMsg=>{
            this.error= errorMsg;
            this.isLoading=false;
        }
    );
    form.reset();
 }
}