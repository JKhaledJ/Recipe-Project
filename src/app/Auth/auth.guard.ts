import { User } from './user.model';
import { map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {


  constructor(private authService: AuthService, private router: Router) {
    console.log("AuthGuard const")
  }
  isAuth: boolean = false;
  myRoute: UrlTree;
  Data: any;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    this.authService.users
      .subscribe(() => {
        this.isAuth = true;
      }
      )
    this.authService.autoLogin();

    if (!this.isAuth) {
      return this.router.navigate(['/auth'])
    }
    else {
      return this.isAuth;
    }
  }
}