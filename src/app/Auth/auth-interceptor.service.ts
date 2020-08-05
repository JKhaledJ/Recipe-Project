import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http'
import { take, exhaustMap } from 'rxjs/operators';
@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    token;
    constructor(private authService: AuthService){
        this.authService.users.subscribe(user=>{
            this.token=user.token;
        })
    }

    intercept(req: HttpRequest<any>, next: HttpHandler){
        //this is using exhustMap.
        
    //   return  this.authService.users.pipe(take(1),exhaustMap(user=>{
    //       if(!user){
    //         return next.handle(req);
    //       }
    //       else{
    //         const  newReq = req.clone({ params: new HttpParams().set('auth',user.token) });
    //         return next.handle(newReq); 
    //       }
            
    //     })
    //   )
    if(!this.token){
        return next.handle(req);
    }
    else{
         const newreq= req.clone({ params: new HttpParams().set('auth',this.token) });
          return next.handle(newreq);
    }
         
    }
}