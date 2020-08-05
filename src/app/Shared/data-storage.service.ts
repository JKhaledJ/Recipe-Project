import { Params } from '@angular/router';
import { AuthService } from './../Auth/auth.service';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, exhaustMap, take } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  recipes: Recipe[];
  path = 'https://ng-recipe-book-481a6.firebaseio.com/recipe.json';

  constructor(private http: HttpClient,
    private recipeService: RecipeService, private authService: AuthService) {
    // this.authService.users.subscribe(user=>{
    //   this.token = user.token;
    //  });
  }

  // token: string = null;
  fetchData() {
    //to attach token_ID with the get method, we can take the token_ID from use as above and attach
    //it to the get method as below. but there is another efficient method. Using 'exhustMap' we simply can
    //subscribe two observables and replace the first observable data with the second observable and return it. 


     return  this.http.get<Recipe[]>(this.path)
      .pipe(
        map(recipes=>{
          return recipes.map(recipe=>{
              return {  ...recipe, Ingredient: recipe.Ingredient ? recipe.Ingredient : [] };
          });
        }),
        tap(recipes=>{
            this.recipeService.overWriteRecipes(recipes);
        })
     )

  //  return this.authService.users.pipe(
  //     take(1),
  //     exhaustMap(user => {
  //       return this.http.get<Recipe[]>(this.path,{params: new HttpParams().set('auth',user.token)})
  //     }), map(recipes => {
  //       return recipes.map(recipe => {
  //         return { ...recipe, Ingredient: recipe.Ingredient ? recipe.Ingredient : [] };
  //       });
  //     }),
  //     tap(recipes => {
  //       this.recipeService.overWriteRecipes(recipes);
  //     })
  //   );
  }

  postData() {
    this.recipes = this.recipeService.getRecipes();
    this.http.put(this.path, this.recipes)
      .subscribe(
        responseData => {
          console.log(responseData);
        }
      )
  }
}