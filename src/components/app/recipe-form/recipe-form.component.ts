import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Recipe } from '../models/recipe';
import * as uuid from "uuid";
import { ImageFruit } from '../../../assets/imagesEncoded';


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
  recipe: Recipe;
  recipeForm: NgForm;
  value: Recipe;
  cardImageBase64: string = '';

  constructor() { }

  ngOnInit(): void {
  }



  CreateBase64String(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;         
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  addIngredient(ingredient: string): void {
    if (ingredient) {
      this.ingredientslist.push(ingredient);
      this.ingredient = "";
    }
  }

  removeIngredient(ingredient: string): void {
    if (ingredient) {
      const index = this.ingredientslist.indexOf(ingredient);
      if (index != -1) {
        this.ingredientslist.splice(index, 1);
      }
    }
  }

  addRecipe() {
    console.log("voeg recept toe");
  }

  onSubmit(recipeForm: NgForm) {
      this.value = recipeForm.value;
      this.recipe = new Recipe(
        uuid.v4(), 
        this.value.Title, 
        this.cardImageBase64, 
        this.ingredientslist, 
        this.value.Description, 
        this.value.Vegan, 
        this.value.Persons, 
        this.selectedPrepTime, 
        this.value.Autor
      ,);
    console.log(this.recipe);
  }
}

