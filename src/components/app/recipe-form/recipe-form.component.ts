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
    console.log(ingredient);
    if(ingredient){
      this.ingredients.push(ingredient);
      this.ingredient = "";
    }
  }
}
