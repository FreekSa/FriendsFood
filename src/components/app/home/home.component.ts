import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import {ImageFruit} from '../../../assets/imagesEncoded';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  cards: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  recipe: Recipe = new Recipe(1, "fruitsalade", "f", ["peer", "banaan", "appel", "kiwi"], "Cut all the ingredïents \n put them all togethere in a bowl", true, 1,1, "Freek");
  recipes: Array<Recipe> = [this.recipe];
  image: string = new ImageFruit().imageFruit;
  constructor() { }

  ngOnInit(): void {
  }

}
