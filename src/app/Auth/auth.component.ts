import { PlaceHolderDirective } from './../Shared/Placeholder/placeholder.directive';
import { AlertCompoenet } from './../Shared/alert/alert.component';
import { AuthService, AuthResponseData } from './auth.service';
import { Component, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
    selector:'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy{
 isLogIn = true;
 isLoading =false;
 error : string = null;
 closeSub: Subscription;
 @ViewChild(PlaceHolderDirective) hostAlert: PlaceHolderDirective;

 constructor(private authService: AuthService, private router: Router,
            private componentFactoryReslover: ComponentFactoryResolver){}
 onSwitchMode(){
     this.isLogIn= !this.isLogIn;
 }
 onHandleClose(){
   this.error=null;
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
            this.showErrorAlert(errorMsg);
        }
    );
    form.reset();
 }

 private showErrorAlert(message: string){
    const alertComFactory= this.componentFactoryReslover.resolveComponentFactory(AlertCompoenet);
    const hostViewContainerRef= this.hostAlert.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef =  hostViewContainerRef.createComponent(alertComFactory);
    componentRef.instance.message=message;
    this.closeSub = componentRef.instance.close.subscribe(()=>{
        this.closeSub.unsubscribe();
        hostViewContainerRef.clear();
    })
 }

 ngOnDestroy(){
     if(this.closeSub){
         this.closeSub.unsubscribe();
     }
 }
}