import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ShoppingListModule } from './shopping-list/shoppingList.module';
import { AuthModule } from './Auth/auth.module';
import { CoreModule } from './core.module';
import { SharedModule } from './Shared/Shared.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { DemoComponent } from './demo/demo.component';
import { appRoutingModule } from './app-Routing.module';
import { RecipesModule } from './recipes/recipes.module';

@NgModule({
  declarations: [
    headerComponent,
    AppComponent,
    DemoComponent,
],
  imports: [
    appRoutingModule,
    RouterModule, 
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule, //we do not import it now since we use lazy loading.
    ShoppingListModule,
    AuthModule,
    SharedModule,
    CoreModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
