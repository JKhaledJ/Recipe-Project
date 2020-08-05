import { AuthService } from './../Auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {DataStorageService} from '../Shared/data-storage.service'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
selector:'appHeader',
templateUrl:'./header.component.html'
})

export class headerComponent implements OnInit, OnDestroy{
    collapsed = true;
    isAuthenticated = false;
    userSub : Subscription;
    constructor(private dataStorage: DataStorageService, private authService: AuthService, private router: Router){}

    ngOnInit(){
      this.userSub =  this.authService.users.subscribe(
            user=>{
             this.isAuthenticated =  user ? true:false;
             console.log("header"+user)
            }
        );
        console.log("header: "+this.isAuthenticated)
    }

    onPostData(){
        this.dataStorage.postData();
    }
    onFetchData(){
        this.dataStorage.fetchData().subscribe();
    }
    onLogout(){
        this.authService.LogOut();
        this.router.navigate(['/auth'])
    }
    ngOnDestroy(){
        this.userSub.unsubscribe();
    }
}