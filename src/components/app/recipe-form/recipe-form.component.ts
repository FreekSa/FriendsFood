import { Component, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Recipe } from '../models/recipe';
import * as uuid from "uuid";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  ingredientslist: string[] = [];
  ingredient: string = "";
  amountOfTime = "";
  submitted = false;
  selectedPrepTime = "";
  selectedImage: any;
  recipe = new Recipe(null, null, null, null, null, null, null, null, null);
  recipeForm: NgForm;
  value: Recipe;
  cardImageBase64: string = '';

  constructor(public dialogRef: MatDialogRef<RecipeFormComponent>, @Inject(MAT_DIALOG_DATA) public data ) { }
  ngOnInit(): void {
    if(this.data.recipe){
      this.recipe = this.data.recipe;
      this.selectedPrepTime = this.data.recipe.PrepTime;
    } else {
      this.recipe = new Recipe(null, null, null, [], null, null, null, null, null);
    }
  }


  CreateBase64String(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.recipe.Picture = imgBase64Path;         
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  addIngredient(ingredient: string): void {
    if (ingredient) {
      this.recipe.Ingredients.push(ingredient);
      this.ingredient = "";
    }
  }

  removeIngredient(ingredient: string): void {
    if (ingredient) {
      const index = this.recipe.Ingredients.indexOf(ingredient);
      if (index != -1) {
        this.recipe.Ingredients.splice(index, 1);
      }
    }
  }

  addRecipe() {
    console.log("voeg recept toe");
  }
  
  onSubmit(recipeForm: NgForm) {
    
    this.value = recipeForm.value;
    if(this.recipe.Id){
      this.recipe = new Recipe(
          this.data.recipe.Id, 
          this.value.Title, 
          this.recipe.Picture, 
          this.recipe.Ingredients, 
          this.value.Description, 
          this.value.Vegan, 
          this.value.Persons, 
          this.selectedPrepTime, 
          this.value.Autor
          ,);
    } else {
      this.recipe = new Recipe(
          uuid.v4(), 
          this.value.Title, 
          this.recipe.Picture, 
          this.recipe.Ingredients, 
          this.value.Description, 
          this.value.Vegan, 
          this.value.Persons, 
          this.selectedPrepTime, 
          this.value.Autor
          ,);
    }
        this.dialogRef.close(this.recipe);
  }
}

