import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-delete-recipe',
  templateUrl: './delete-recipe.component.html',
  styleUrls: ['./delete-recipe.component.css']
})
export class DeleteRecipeComponent implements OnInit {

  recipe: Recipe;
  constructor(public dialogRef: MatDialogRef<DeleteRecipeComponent>, @Inject(MAT_DIALOG_DATA) public data, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipe = this.data;
    console.log(this.data);
  }

  async closeDialog(deleteRecipe? : boolean){
    if(deleteRecipe){
      const deleted = await this.recipeService.deleteRecipe(this.recipe.Id).subscribe()
      if(deleted){
        this.dialogRef.close();
      }
    } else {
      this.dialogRef.close();
    }
  }

}
