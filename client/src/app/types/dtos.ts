import {Dish} from "@app/types/dish";
import {Recipe} from "@app/types/recipe";
import {Step} from "@app/types/step";

export type DishesDto = {
	dishes: Dish[],
	count: number
}

export type RecipesManyDto = {
	recipes: Recipe[],
	count: number
}

export interface RecipesSingleDto extends Recipe {
	steps: Step[]
}