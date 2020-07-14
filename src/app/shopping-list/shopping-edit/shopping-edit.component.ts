import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/Shared/shared.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @Output() AddedItems = new EventEmitter<{name: string, amount: number}>(); same as below.

  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  AddItem(){
    const nameValue=this.nameInput.nativeElement.value;
    const amountValue=this.amountInput.nativeElement.value;
    const Item = new Ingredient(nameValue,amountValue);
    this.shoppingListService.AddItem(Item);
  }
}
