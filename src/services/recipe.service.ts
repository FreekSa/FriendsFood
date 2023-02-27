import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
 port = 3000;
 host = "http://192.168.1.19:" + this.port;
  constructor(public http: HttpClient) { }

  getRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.host + '/recipes');
  }

  getRecipe(id: String): Observable<Recipe>{
    return this.http.get<Recipe>(this.host + '/recipes/' + id);
  }

  addRecipe(recipe: Recipe): Observable<Recipe>{
    delete recipe.Id;
    console.log(recipe);
   return this.http.post<Recipe>(this.host + '/recipes', recipe);
  } 

  editRecipe(recipe: Recipe): Observable<Recipe>{
    return this.http.put<Recipe>(this.host + '/recipes/' + recipe.Id, recipe);
  }

  deleteRecipe(recipeId: string): Observable<Recipe>{
    return this.http.delete<Recipe>(this.host + '/recipes/' + recipeId);
  }
  


}
