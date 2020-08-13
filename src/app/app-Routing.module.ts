import {Routes, RouterModule, PreloadAllModules} from '@angular/router'
import { NgModule } from '@angular/core'

import { DemoComponent } from './demo/demo.component'

const appRouting : Routes = [
    {path : '', redirectTo: '/recipes',  pathMatch: 'full'},
    {path : 'demo', component: DemoComponent},
    {path: 'recipes', loadChildren:()=>import('./recipes/recipes.module').then(m=>m.RecipesModule)},
    {path: 'shoppinglist', loadChildren:()=>import('./shopping-list/shoppingList.module').then(m=>m.ShoppingListModule)},
    {path: 'auth', loadChildren:()=>import('./Auth/auth.module').then(m=>m.AuthModule)}
    
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRouting,{preloadingStrategy:PreloadAllModules}) 
        //preloadingStrategy:PreloadAllModules will download all the lazy loaded files at the first visit,
        // so when we go to the lazy loaded page, then we do not download its file at that time.
    ],
    exports:[RouterModule]
})

export class appRoutingModule{

}