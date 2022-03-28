import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
    selector: 'app-list-edit',
    templateUrl: './list-edit.component.html',
    styleUrls: ["./list-edit.component.css"],
})

export class ListEditComponent implements OnInit {
    @ViewChild(`formData`) formData: NgForm;

    constructor(private shoppingListService: ShoppingListService) { };

    onSubmit() {
        const ingredientName = this.formData.value.name;
        const ingredientAmount = this.formData.value.amount;

        const newIngredient = new Ingredient(ingredientName, ingredientAmount)

        this.shoppingListService.addIngredient(newIngredient);
    }

    ngOnInit(): void {
    }

    onClear() {
        this.formData.reset()
    }
}