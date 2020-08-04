import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
    selector:'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent{
 isLogIn = true;
 isLoading =false;
 error : string = null;
 constructor(private authService: AuthService){}
 onSwitchMode(){
     this.isLogIn= !this.isLogIn;
 }
 onSubmit(form: NgForm){
    if(!form.valid){
        return;
    }
    if(this.isLogIn){
       /// 
    }
    else{
        const email= form.value.email;
        const password = form.value.password;
        this.isLoading=true;
        this.authService.singUp(email,password).subscribe(
        responseData=>{
            console.log(responseData);
            this.isLoading=false;
        }, 
        error=>{
            console.log(error);
            this.error= error.error.error.message;
            this.isLoading=false;
        });
    }
    
    form.reset();
 }
}