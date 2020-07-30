import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators'
@Injectable({
    providedIn : 'root'
})
export class DataStorageService{
    recipes:Recipe[];
    path='https://ng-recipe-book-481a6.firebaseio.com/recipe.json';

    constructor(private http: HttpClient,
                private recipeService: RecipeService){}
    
    fetchData(){
     
        this.http.get<Recipe[]>(this.path)
      .pipe(
        map(recipes=>{
          return recipes.map(recipe=>{
              return {
                  ...recipe,
                  Ingredient: recipe.Ingredient ? recipe.Ingredient : []
              };
          });
        })
    ).subscribe(
            responseData=>{
                console.log(responseData)
            this.recipeService.overWriteRecipes(responseData);
            }
        );
    }
    
    postData(){
      this.recipes= this.recipeService.getRecipes();
      this.http.put(this.path,this.recipes)
      .subscribe(
        responseData=>{
           console.log(responseData);
        }
      )
    }
}