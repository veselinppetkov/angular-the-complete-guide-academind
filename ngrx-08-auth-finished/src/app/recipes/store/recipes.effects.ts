import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { Recipe } from "../recipe.model";
import * as RecipesAction from './recipes.actions'

@Injectable()
export class RecipeEffects {

    fetchRecipes = createEffect(() => this.actions$.pipe(
        ofType(RecipesAction.FETCH_RECIPES),
        switchMap(() => {
            return this.http
                .get<Recipe[]>(
                    'hhttps://ng-course-recipe-book-f1f0d-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
                );
        }),
        map(recipes => {
            return recipes.map(recipe => {
                return {
                    ...recipe,
                    ingredients: recipe.ingredients ? recipe.ingredients : []
                };
            });
        }),
        map(recipes => {
            return new RecipesAction.SetRecipes(recipes);
        })
    ));


    constructor(private actions$: Actions, private http: HttpClient) { };

}
