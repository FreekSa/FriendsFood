import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  ingredients: string[] = [];

  ingredient: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(ingredient: string): void{
    if(ingredient){
      this.ingredients.push(ingredient);
      this.ingredient = "";
    }
  }

  removeIngredient(ingredient: string): void{
    if(ingredient){
      const index = this.ingredients.indexOf(ingredient);
      console.log(index);
      if(index != -1){
        this.ingredients.splice(index, 1);
      }
    }
  }
}
