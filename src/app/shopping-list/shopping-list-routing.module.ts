import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const ShoppingListRoutes : Routes = [
    {path :'', component: ShoppingListComponent, children:[
        {path: 'id/shopping-edit' , component: ShoppingEditComponent}
    ]},
]

@NgModule({
    imports:[
        RouterModule.forChild(ShoppingListRoutes)
    ],
    exports:[RouterModule]
})
export class ShoppingListRoutingModule{

}