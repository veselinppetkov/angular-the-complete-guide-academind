import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) { };

    storeData() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://ng-course-recipe-book-f1f0d-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes)
            .subscribe(data => console.log(data));
    }

    fetchData() {
        return this.http.get<Recipe[]>('https://ng-course-recipe-book-f1f0d-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return {
                        ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
                    };
                }
                )
            })), tap((recipes: Recipe[]) => {
                this.recipeService.fetchRecipes(recipes);
            })
    }
}