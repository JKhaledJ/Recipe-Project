import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Recipe} from './recipe.model';
import { Injectable } from '@angular/core';
import { DataStorageService } from '../Shared/data-storage.service'
import { RecipeService } from './recipe.service';

@Injectable({providedIn:'root'})
export class RecipesResolverService implements Resolve<Recipe[]>{
    constructor(private dataStorage: DataStorageService,
                private recipeService: RecipeService){}
 recipes= this.recipeService.getRecipes();
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        
        if(this.recipes.length===0){
            return this.dataStorage.fetchData();
        }
        else{
            return this.recipes;
        }
    }
}