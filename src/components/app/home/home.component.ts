import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import {ImageFruit} from '../../../assets/imagesEncoded';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // test to display 10 cards
  cards: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // test recipe
  recipe: Recipe = new Recipe(1, "fruitsalade", "f", ["peer", "banaan", "appel", "kiwi"], "Cut all the ingredïents \n put them all together in a bowl", true, 1, "kort", "Freek");
  // array of mockdata
  recipes: Array<Recipe> = [this.recipe];
  // base64 encoded image
  image: string = new ImageFruit().imageFruit;

  
  constructor() { }

  ngOnInit(): void {
  }

}
