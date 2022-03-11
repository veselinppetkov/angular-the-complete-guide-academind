import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
    selector: 'app-list-edit',
    templateUrl: './list-edit.component.html',
    styleUrls: ["./list-edit.component.css"],
})

export class ListEditComponent implements OnInit {
    @ViewChild(`nameInput`, {static: false}) nameInput: any;
    @ViewChild(`amountInput`, {static: false}) amountInput: any;

    @Output() addIngredient = new EventEmitter<Ingredient>(); 

    onAddClicked() {
    const ingredientName = this.nameInput.nativeElement.value
    const ingredientAmount = this.amountInput.nativeElement.value

    const newIngredient = new Ingredient(ingredientName, ingredientAmount)

    this.addIngredient.emit(newIngredient);
    }

    ngOnInit(): void {}
}