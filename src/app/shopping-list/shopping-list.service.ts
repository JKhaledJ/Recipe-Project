import { Ingredient } from '../Shared/shared.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService{
    ingredientsChanged=new EventEmitter<Ingredient[]>();

   private ingredients: Ingredient[]=[
        new Ingredient('Apple',5),
        new Ingredient('Potato',10)
      ];
    getIngredient(){
        return this.ingredients.slice();
    }
    AddItem(ingr: Ingredient){
        this.ingredients.push(ingr);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    AddIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}