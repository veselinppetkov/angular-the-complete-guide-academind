import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

import { Recipe } from "./recipe.model";

export class RecipeService {
    selectedRecipe = new Subject<Recipe>();
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [];

    fetchRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice()
    }

    getRecipeById(id: number) {
        return this.recipes[id];
    }

    addRecipe(newRecipe: Recipe) {
        this.recipes.push(newRecipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(id: number, newRecipe: Recipe) {
        this.recipes[id] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    removeRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }


};