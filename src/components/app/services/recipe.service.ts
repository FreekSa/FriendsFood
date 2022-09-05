import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
 // host = 'localhost:';
  host = "https://friends-food-api.herokuapp.com:";
  port = 3000;
  constructor(public http: HttpClient) { }

  getRecipes(): any{
    return this.http.get<Recipe>('http://' + this.host + this.port + '/recipes');
  }

  addRecipe(recipe: Recipe): Observable<Recipe>{
    delete recipe.Id;
    console.log(recipe);
   return this.http.post<Recipe>('http://'+ this.host + this.port + '/recipes', recipe);
  } 

  editRecipe(recipe: Recipe): Observable<Recipe>{
    return this.http.put<Recipe>('http://' + this.host + this.port + '/recipes/' + recipe.Id, recipe);
  }



}
