import { LoadingSpinnerComponent } from './Shared/loadingSpinner/loading-spinner.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {headerComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DemoComponent } from './demo/demo.component';
import { dropDownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { appRoutingModule } from './app-Routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './recipes/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import {AuthComponent} from './Auth/auth.component'

@NgModule({
  declarations: [
    headerComponent,
    AppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DemoComponent,
    dropDownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    AuthComponent,
    LoadingSpinnerComponent
],
  imports: [
    appRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [ShoppingListService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
