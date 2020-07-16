import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../Shared/shared.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { timer } from 'rxjs';

@Injectable()
export class RecipeService{
recipeSelected = new EventEmitter<Recipe>();
ingredientSelected:[Ingredient];
 private recipes:Recipe[]=[
        new Recipe('A test1 recipe',
        'This is a test1 recipe',
        'https://storage.needpix.com/rsynced_images/recipe-2428926_1280.jpg',
        [
          new Ingredient('French Fries',20),
          new Ingredient('Tomato',3)
        ]),
        new Recipe('A test2 recipe',
        'This is a test2 recipe',
        'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
        [
          new Ingredient('Potato',6),
          new Ingredient('Onion',3)
        ]),
        new Recipe('A test3 recipe',
        'This is a test3 recipe',
        'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/article/2020/04/21/fodmap-could-enzymes-help-boost-tolerability-in-plant-based-foods/10928071-1-eng-GB/FODMAP-Could-enzymes-help-boost-tolerability-in-plant-based-foods_wrbm_large.jpg',
        [
          new Ingredient('Meat',2),
          new Ingredient('Tomato',3)
        ])
      ];
    
      constructor(private slService:ShoppingListService){}

    getRecipes(){
        return this.recipes.slice(); //it will return a copy of 'recipes' array.
    }
    addToShoppingList(ingr:Ingredient[]){
      this.slService.AddIngredients(ingr);
    }
    getRecipeByID(id:number){
      return this.recipes[id];
    }
}