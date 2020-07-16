import {Routes, RouterModule} from '@angular/router'
import { NgModule } from '@angular/core'

import { RecipesComponent } from './recipes/recipes.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
const appRouting : Routes = [
    {path : '', redirectTo: '/recipes', pathMatch: 'full'},
    {path :'recipes', component: RecipesComponent},
    {path :'shoppinglist', component: ShoppingListComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(appRouting)],
    exports:[RouterModule]
})

export class appRoutingModule{

}