import { Component } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ["./shopping-list.component.css"],
})

export class ShoppingListComponent {
    ingredients: Ingredient[] = [
new Ingredient(`Salt`, 40),
new Ingredient(`Spices`, 50),
new Ingredient(`Dry Herbs`, 10),
    ];

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
    }
}