import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService, RecipeService]
})
export class AppComponent {
  selectedNavItem: string = "Recipes";

  onNavigate(selectedNavItem: string) {
  this.selectedNavItem = selectedNavItem;
  }
}
