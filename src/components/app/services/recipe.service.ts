import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(public http: HttpClient) { }

  getRecipes(): any{
    return this.http.get<Recipe>('http://localhost:3000/recipes');
  }

}
