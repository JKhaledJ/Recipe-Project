import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  Myform: FormGroup;
  recipe: Recipe;
  constructor(private service: RecipeService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (myParam: Params) => {
        this.id = +myParam['id'];
        this.editMode = myParam['id'] != null;
        this.recipe = this.service.getRecipeByID(this.id);

        this.onInitForm();
      }
    );
  }

  onInitForm() {
    let name = '';
    let description = '';
    let imageURL = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      name = this.recipe.name;
      description = this.recipe.description;
      imageURL = this.recipe.ImagePath;

      if (this.recipe['Ingredient']) {
        for (let ingr of this.recipe.Ingredient) {
          recipeIngredients.push(
            new FormGroup({
              ingrName: new FormControl(ingr.name, Validators.required),
              ingrAmount: new FormControl(ingr.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.Myform = new FormGroup({
      name: new FormControl(name, Validators.required),
      description: new FormControl(description, Validators.required),
      imageURL: new FormControl(imageURL, Validators.required),
      ingredients: recipeIngredients
    });
  }

  // get myControl() {
  //   // return (<FormArray>this.Myform.get('ingredients')).controls;
  //   // console.log(((this.Myform.get('ingredients') as FormArray).controls));
  //   return this.Myform.get('ingredients') as FormArray;
  // }
  ngOnAddOrUpdate() {

    const recipe = new Recipe(this.Myform.value['name'],
      this.Myform.value['description'],
      this.Myform.value['imgUrl'],
      this.Myform.value['ingredients'])
    if (this.editMode) {
      this.service.UpdateRecipe(this.id, recipe);
      this.editMode = false;
      this.onCancel();
    }
    else {
      this.service.AddRecipe(recipe);
      this.onCancel();
    }
  }
  onCancel() {
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  
  onAddIngredient() {
    (<FormArray>this.Myform.get('ingredients')).push(
      new FormGroup({
        'ingrName': new FormControl(null, Validators.required),
        'ingrAmount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );

  }
  onRemoveIngredient(id:number){
    (<FormArray>this.Myform.get('ingredients')).removeAt(id);
  }

}
