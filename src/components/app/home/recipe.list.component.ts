import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe';
import { ImageCake } from '../../../assets/imagesEncoded';
import { MatDialog } from '@angular/material/dialog';
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import * as uuid from "uuid";
import { RecipeService } from '../../../services/recipe.service';
import { DeleteRecipeComponent } from '../delete-recipe/delete-recipe.component';

@Component({
  selector: 'app-home',
  templateUrl: './recipe.list.component.html',
  styleUrls: ['./recipe.list.component.css']
})

export class RecipeListComponent implements OnInit {
  // test to display 10 cards
  cards: Array<number> = [];
  // array of mockdata
  recipes: Array<Recipe> = [];
  // base64 encoded image
  newRecipe: Recipe;
  // test recipe
  mockRecipe: Recipe = new Recipe(uuid.v4(), "Chocoladecake", new ImageCake().imageCake, ["150gr vloeibare boter", "150 g suiker", "200 g pure chocoladedruppels (of kleine stukjes van een reep)", "4 kleine eieren", "150gr bloem", "6g bakpoeder", "extra: cakevorm"],
    "1. Verwarm de oven voor op 160°C (elektrische oven).\n\n2. Klop de boter en de suiker in een kom met een pollepel of mixer 5-8 minuten (pollepel duurt het langst) tot de suiker is opgelost. Klop een voor een de eieren erdoor.\n\n3. Doe 150 g chocolade in een steelpan. Zet het pannetje in een pan met een laagje kokend water en laat de chocolade smelten (er mag geen water bij de chocolade komen!) Roer de chocolade glad en meng door het beslag. Schep de rest van de chocolade(druppels) erdoor.\n\n4. Zeef de bloem, een snufje zout en het bakpoeder boven de kom en schep door het beslag (zo kort mogelijk, maar wel goed mengen).\n\n5. Schep het beslag in de voorbereide bakvorm.\n\n6. Bak de cake in de voorverwarmde oven in 50-60 minuten goudbruin en gaar. Laat de gebakken cake 2 minuten staan. Keer de vorm dan om op een rooster en laat de cake uit de vorm glijden. Snijd de cake in plakken.", false, 4, "short", "Freek")

  favorites: Array<string> = [];

  constructor(public dialog: MatDialog, private recipeService: RecipeService) { }

  ngOnInit(): void {
    //   this.recipes.push(this.mockRecipe);
    this.getData();
  }

  async getData() {
    await this.recipeService.getRecipes().subscribe((res: Recipe[]) => { this.recipes = res });
  }

  addOrEditRecipe(recipe?: Recipe): void {
    const dialogRef = this.dialog.open(RecipeFormComponent, { width: '100%', data: { recipe } }
    );
    dialogRef.afterClosed().subscribe((res: Recipe) => {
      if (res) {
        console.log("res defined");
        if (this.recipes.findIndex(x => x.Id == res.Id) == -1) {
          this.newRecipe = res;
          this.recipes.push(this.newRecipe);
        } else {
          this.recipes[this.recipes.findIndex(x => x.Id == res.Id)] = res;
        }
      }
      else {
        console.log("res undefined");
      }
    }
    )
  }

  deleteRecipeDialog(recipe: Recipe): void {
    const dialogRef = this.dialog.open(DeleteRecipeComponent, { data: recipe });
    dialogRef.afterClosed().subscribe((res: Recipe) => {
      if (res) {
        const index = this.recipes.findIndex(x => x.Id === recipe.Id);
        this.recipes.splice(index, 1);
      } else {
        return;
      }
    },)
  }

  addFavorite(id: string) {
    this.favorites.push(id);
  }

  colorFavorite(id: string): string {
    if (this.favorites.findIndex(x => x == id) > -1) {
      return 'red';
    }
    else {
      return 'black';
    }
  }
}
