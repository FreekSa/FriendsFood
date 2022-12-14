export class Recipe{
    Id: string = null;
    Title: string = null;
    Picture: string = null;
    Ingredients: string[] = null;
    Description: string = null;
    Vegan: boolean = false;
    Persons: number = 1;
    PrepTime: string = null;
    Autor: string = null;

  constructor(Id: string, Title: string, Picture: string, Ingredients: string[], Description: string,
              Vegan: boolean, Persons: number, PrepTime: string, Autor: string) {
      this.Id = Id;
      this.Title = Title;
      this.Picture = Picture;
      this.Ingredients = Ingredients;
      this.Description = Description;
      this.Vegan = Vegan;
      this.Persons = Persons;
      this.PrepTime = PrepTime;
      this.Autor = Autor;
  }
}
