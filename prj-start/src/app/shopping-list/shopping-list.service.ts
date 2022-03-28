import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient(`Salt`, 40),
        new Ingredient(`Spices`, 50),
        new Ingredient(`Dry Herbs`, 10),
    ];

    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    addRecipeIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.next(this.ingredients.slice())
    }








};