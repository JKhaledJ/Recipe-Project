import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../Shared/shared.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
ingredients: Ingredient[];
private igChangesSub: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
   this.ingredients = this.shoppingListService.getIngredient();
   this.igChangesSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingr: Ingredient[])=>{
        this.ingredients=ingr;
      }
    );
  }

  ngOnDestroy(){
    this.igChangesSub.unsubscribe();
  }
}
