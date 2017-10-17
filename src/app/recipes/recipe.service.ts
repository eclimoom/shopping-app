import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a  test',
      'https://static.tumblr.com/e4425b81bfd1a22f908322d0bab7f1ce/jrga6uw/' +
      '2H0nbc3kx/tumblr_static_tumblr_static_cikl62uwv20ws8soo084gco40_640.jpg'),
    new Recipe('Another Test Recipe', 'This is another simply test',
      'http://s10.favim.com/orig/160622/food-junk-food-pizza-tumblr-Favim.com-4441580.jpeg'),
    new Recipe('Yet Another Test Recipe', 'Yet another simply test',
      'http://68.media.tumblr.com/8edc19a8a8088529b73c93940c9569e0/tumblr_n9tjz0zMIi1qb90noo1_500.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
