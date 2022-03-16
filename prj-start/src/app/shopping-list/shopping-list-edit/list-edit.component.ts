import { Component, OnInit,ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
    selector: 'app-list-edit',
    templateUrl: './list-edit.component.html',
    styleUrls: ["./list-edit.component.css"],
})

export class ListEditComponent implements OnInit {
    @ViewChild(`nameInput`, {static: false}) nameInput: any;
    @ViewChild(`amountInput`, {static: false}) amountInput: any;

    constructor(private shoppingListService: ShoppingListService) {};

    onAddClicked() {
    const ingredientName = this.nameInput.nativeElement.value
    const ingredientAmount = this.amountInput.nativeElement.value
    const newIngredient = new Ingredient(ingredientName, ingredientAmount)

    this.shoppingListService.addIngredient(newIngredient);
    }

    ngOnInit(): void {}
}