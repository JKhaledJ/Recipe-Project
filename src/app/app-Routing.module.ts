import {Routes, RouterModule} from '@angular/router'
import { NgModule } from '@angular/core'

import { DemoComponent } from './demo/demo.component'

const appRouting : Routes = [
    {path : '', redirectTo: '/recipes',  pathMatch: 'full'},
    {path : 'demo', component: DemoComponent},
    // {path : 'recipes', loadChildren:'./recipes/recipes.module#RecipesRoutingModules'},
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRouting)
    ],
    exports:[RouterModule]
})

export class appRoutingModule{

}