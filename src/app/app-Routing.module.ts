import {Routes, RouterModule} from '@angular/router'
import { NgModule } from '@angular/core'

import { DemoComponent } from './demo/demo.component'
import { AuthComponent } from './Auth/auth.component'

const appRouting : Routes = [
    {path : '', redirectTo: '/recipes',  pathMatch: 'full'},
    {path : 'demo', component: DemoComponent},
    
    
    {path:'auth', component: AuthComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRouting)
    ],
    exports:[RouterModule]
})

export class appRoutingModule{

}