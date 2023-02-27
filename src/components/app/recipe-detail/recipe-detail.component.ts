import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe';
import {ActivatedRoute} from '@angular/router';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe = new Recipe(null, null, null, null, null, null, null, null, null);
  constructor(private route: ActivatedRoute, public recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{const id = params['Id']; this.getRecipe(id);});
  }
  
  async getRecipe(id){
    await this.recipeService.getRecipe(id).subscribe((res: Recipe) => {this.recipe = res; console.log(this.recipe);});
    
  }

}
