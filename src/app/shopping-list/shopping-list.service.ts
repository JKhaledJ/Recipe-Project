import { Ingredient } from '../Shared/shared.model';
import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService{
    ingredientsChanged=new Subject<Ingredient[]>();
    startedEditChanges = new Subject<number>();
   private ingredients: Ingredient[]=[
        new Ingredient('Apple',5),
        new Ingredient('Potato',10)
      ];
    getIngredient(){
        return this.ingredients.slice();
    }
    getIngredientByID(id: number){
        return this.ingredients[id];
    }
    AddItem(ingr: Ingredient){
        this.ingredients.push(ingr);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    AddIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}