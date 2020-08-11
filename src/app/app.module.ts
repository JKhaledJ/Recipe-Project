import { RouterModule } from '@angular/router';
import { RecipesModule } from './recipes/recipes.module';
import { PlaceHolderDirective } from './Shared/Placeholder/placeholder.directive';
import { AlertCompoenet } from './Shared/alert/alert.component';
import { AuthInterceptorService } from './Auth/auth-interceptor.service';
import { LoadingSpinnerComponent } from './Shared/loadingSpinner/loading-spinner.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {headerComponent} from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DemoComponent } from './demo/demo.component';
import { dropDownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { appRoutingModule } from './app-Routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './recipes/recipe.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthComponent} from './Auth/auth.component'

@NgModule({
  declarations: [
    headerComponent,
    AppComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DemoComponent,
    dropDownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertCompoenet,
    PlaceHolderDirective
],
  imports: [
    appRoutingModule,
    RouterModule, 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule
    
  ],
  providers: [ShoppingListService,RecipeService,
    { provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
