import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SharedModule } from '../Shared/Shared.module';
@NgModule({
    declarations:[
        AuthComponent
    ],
    imports:[
    SharedModule,
    FormsModule,
    RouterModule.forChild([{path:'', component: AuthComponent}]),
    ] 
})
export class AuthModule{

}