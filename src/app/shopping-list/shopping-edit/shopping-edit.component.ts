import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/Shared/shared.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  // @Output() AddedItems = new EventEmitter<{name: string, amount: number}>(); same as below.

  @ViewChild('f') myForm : NgForm;
  editedItem: Ingredient;
  editedItemIndex:number;
  editedMode=false;
  constructor(private shoppingListService: ShoppingListService) { }
  subscription: Subscription;
  ngOnInit(): void {
    this.subscription=this.shoppingListService.startedEditChanges.subscribe(
      (index: number)=>{
        this.editedMode=true;
        this.editedItemIndex=index;
        this.editedItem=this.shoppingListService.getIngredientByID(index);
        if(this.editedMode){
          this.myForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      }
    );

    
  }

  AddItem(form : NgForm){
    const value = form.value;
    const item = new Ingredient(value.name,value.amount);
    if(this.editedMode){
        this.shoppingListService.UpdateIngredient(this.editedItemIndex,item);
        this.editedMode=false;
      }
    else{
    this.shoppingListService.AddItem(item);
    }
    form.reset();
  }
  Reset(){
    this.myForm.reset();
   this.editedMode=false;
  }
  Delete(){
   this.shoppingListService.DeleteIngredient(this.editedItemIndex);
   this.Reset();
   this.editedMode=false;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
