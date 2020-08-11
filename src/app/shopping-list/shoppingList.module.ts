import { SharedModule } from './../Shared/Shared.module';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
    declarations: [
      ShoppingListComponent,
      ShoppingEditComponent,
    ],
    imports: [
        SharedModule,
        FormsModule,
        ShoppingListRoutingModule
    ],
    exports: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ]
})
export class ShoppingListModule {

}