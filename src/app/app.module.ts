import { RecipesModule } from './recipes/recipes.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core.module';
import { SharedModule } from './Shared/Shared.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { appRoutingModule } from './app-Routing.module';

@NgModule({
  declarations: [
    headerComponent,
    AppComponent
],
  imports: [
    appRoutingModule,
    RouterModule, 
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    //RecipesModule, we do not import it now since we use lazy loading.
    //ShoppingListModule, we do not import it now since we use lazy loading.
    //AuthModule, we do not import it now since we use lazy loading.
    SharedModule,
    CoreModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
