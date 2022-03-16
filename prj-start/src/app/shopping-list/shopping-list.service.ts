import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient(`Salt`, 40),
        new Ingredient(`Spices`, 50),
        new Ingredient(`Dry Herbs`, 10),
            ];

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addRecipeIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }





    
};