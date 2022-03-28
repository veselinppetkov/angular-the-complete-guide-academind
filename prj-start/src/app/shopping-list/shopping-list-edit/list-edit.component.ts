import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
    selector: 'app-list-edit',
    templateUrl: './list-edit.component.html',
    styleUrls: ["./list-edit.component.css"],
})

export class ListEditComponent implements OnInit, OnDestroy {
    @ViewChild(`formData`) formData: NgForm;
    subscription: Subscription;
    editMode: boolean = false;
    editItemIndex: number;

    constructor(private shoppingListService: ShoppingListService) { };

    onSubmit() {
        const ingredientName = this.formData.value.name;
        const ingredientAmount = this.formData.value.amount;

        const newIngredient = new Ingredient(ingredientName, ingredientAmount)

        this.shoppingListService.addIngredient(newIngredient);
    }

    ngOnInit() {
        this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
            this.editItemIndex = index;
            this.editMode = true;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    onClear() {
        this.formData.reset()
    }
}