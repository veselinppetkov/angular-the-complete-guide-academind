import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient(`Salt`, 40),
        new Ingredient(`Spices`, 50),
        new Ingredient(`Dry Herbs`, 10),
            ];

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
    }
};