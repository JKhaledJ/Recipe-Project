import {Routes, RouterModule} from '@angular/router'
import { NgModule } from '@angular/core'

import { RecipesComponent } from './recipes/recipes.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component'
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component'
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component'
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component'
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component'
const appRouting : Routes = [
    {path : '', redirectTo: '/recipes', pathMatch: 'full'},
    {path :'recipes', component: RecipesComponent, children:[
        {path: '', component:RecipeStartComponent},
        {path: 'new', component:RecipeEditComponent},
        {path: ':id', component:RecipeDetailsComponent},
        {path: ':id/edit', component:RecipeEditComponent},
        {path: 'recipe-list', component:RecipeListComponent, children: [
            {path:'id:/recipe-item' , component: RecipeItemComponent}
        ]},
    ]},
    {path :'shoppinglist', component: ShoppingListComponent, children:[
        {path: 'id/shopping-edit' , component: ShoppingEditComponent}
    ]}
]

@NgModule({
    imports:[RouterModule.forRoot(appRouting)],
    exports:[RouterModule]
})

export class appRoutingModule{

}