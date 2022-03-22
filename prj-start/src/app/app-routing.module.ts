import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeSelectorComponent } from "./recipes/recipe-selector/recipe-selector.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";


const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: [
      {path:'', component: RecipeSelectorComponent},
      {path:':id', component: RecipeDetailComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent },
  ]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};