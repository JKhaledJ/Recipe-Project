import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesResolverService } from './recipes-resolver.service';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { AuthGuard } from './../Auth/auth.guard';
import { RecipesComponent } from './recipes.component';


const RecipeRoutes : Routes = [
    {path :'', component: RecipesComponent,canActivate:[AuthGuard], children:[
        {path: '', component:RecipeStartComponent},
        {path: 'new', component:RecipeEditComponent},
        {path: ':id', component:RecipeDetailsComponent, resolve:[RecipesResolverService]},
        {path: ':id/edit', component:RecipeEditComponent,  resolve:[RecipesResolverService]},
        {path: 'recipe-list', component:RecipeListComponent, children: [
            {path:'id:/recipe-item' , component: RecipeItemComponent}
        ]},
    ]}
]

@NgModule({
    imports:[
        RouterModule.forChild(RecipeRoutes)
    ],
    exports:[RouterModule]
})
export class RecipesRoutingModules{

}