import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Recipe } from '../models/recipe';
import * as uuid from "uuid";
import {ImageFruit} from '../../../assets/imagesEncoded';


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

  recipe = new Recipe(null, null, null, this.ingredientslist, null, false, null, null, null);
  recipeForm: NgForm;
  value: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(ingredient: string): void{
    console.log(ingredient);
    if(ingredient){
      this.ingredientslist.push(ingredient);
      this.ingredient = "";
    }
  }

  removeIngredient(ingredient: string): void{
    if(ingredient){
      const index = this.ingredientslist.indexOf(ingredient);
      console.log(index);
      if(index != -1){
        this.ingredientslist.splice(index, 1);
      }
    }
  }

  addRecipe(){
    console.log("voeg recept toe");
  }

  onSubmit(recipeForm: NgForm){
    this.value = recipeForm.value;
    this.recipe.Id = uuid.v4();
    this.recipe.Title = this.value.Title;
    this.recipe.Picture = new ImageFruit().imageFruit;
    this.recipe.Description = this.value.Description;
    this.recipe.Ingredients = this.ingredientslist;
    this.recipe.Persons = this.value.Persons;
    this.recipe.Vegan = this.value.Vegan;
    this.recipe.PrepTime = this.value.PrepTime;
    console.log(this.recipe);
  }
}

