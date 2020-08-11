import { CoreModule } from './core.module';
import { SharedModule } from './Shared/Shared.module';
import { ShoppingListModule } from './shopping-list/shoppingList.module';
import { RouterModule } from '@angular/router';
import { RecipesModule } from './recipes/recipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {headerComponent} from './header/header.component';
import { DemoComponent } from './demo/demo.component';
import { appRoutingModule } from './app-Routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AuthComponent} from './Auth/auth.component'

@NgModule({
  declarations: [
    headerComponent,
    AppComponent,
    DemoComponent,
    AuthComponent,
],
  imports: [
    appRoutingModule,
    RouterModule, 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    CoreModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
