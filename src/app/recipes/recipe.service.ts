import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredients.model';
import {Subject} from 'rxjs/Subject';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('Big Fat Burger',
      'Wow, such tasty, very nom',
      'https://static.tumblr.com/e4425b81bfd1a22f908322d0bab7f1ce/jrga6uw/' +
      '2H0nbc3kx/tumblr_static_tumblr_static_cikl62uwv20ws8soo084gco40_640.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2)
      ]),
    new Recipe('Cheesy Pizza',
      'As fat as butt of your ex',
      'http://s10.favim.com/orig/160622/food-junk-food-pizza-tumblr-Favim.com-4441580.jpeg',
      [
        new Ingredient('Cheese', 1),
        new Ingredient('Dough', 1)
      ])
  ];

  constructor() {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
