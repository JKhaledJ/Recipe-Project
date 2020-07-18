import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id: number;
editMode=false;
recipe:Recipe;
  constructor(private service: RecipeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (myParam: Params)=>{
        this.id= +myParam['id'];
        this.editMode= myParam['id'] !=null;
        this.recipe=this.service.getRecipeByID(this.id);
      }
    );
  }

}
