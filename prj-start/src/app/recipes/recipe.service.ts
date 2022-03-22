import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

import { Recipe } from "./recipe.model";

export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(`Miso Ramen`,`A step-by-step guide to getting this universally adored noodle soup just right.`, `https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg`,[
            new Ingredient(`Meat`, 1),
            new Ingredient(`French Fries`, 10)
        ]),
        new Recipe(`Buffalo Chicken Wings in a Jar`,`This fun-sized take on the game day appetizer offers everything you love about Buffalo wings, minus the bones, messy frying, and any risk of your drunk friends dripping sauce all over the place. Instead of wings, we simply take chicken thighs, simmer them directly in butter 'n hot sauce, shred, and mix with celery.`, `https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F7616507.jpg`,[
        new Ingredient(`Meat`, 1),
        new Ingredient(`French Fries`, 10)
      ])
      ];
      
      getRecipes() {
          return this.recipes.slice()
      }

      getRecipeById(id: number) {
          return this.recipes[id];
      }

      
};