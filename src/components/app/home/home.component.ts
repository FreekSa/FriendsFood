import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { ImageFruit } from '../../../assets/imagesEncoded';
import { MatDialog } from '@angular/material/dialog';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // test to display 10 cards
  cards: Array<number> = [];
  // test recipe
  // array of mockdata
  recipes: Array<Recipe> = [];
  // base64 encoded image
  newRecipe: Recipe;
  
  
  constructor(public dialog: MatDialog) { }
  
  ngOnInit(): void {
  }

  openRecipeForm(): void{
    const dialogRef = this.dialog.open(RecipeFormComponent, {width: '100%'}
      );
      dialogRef.afterClosed().subscribe(res => {
        console.log("dialog closed"); 
        console.log(res);
        if(res){
          this.newRecipe = res;
          this.recipes.push(this.newRecipe)
        }}
  )}
}
