import $api from "@app/http/api";


export type DishesParams = {
	page?: number
	amount?: number
	title?: string
	categoryId?: number
	ratingMin?: number
	ratingMax?: number
}

export const getDishes = async (params?: DishesParams) => {
	const response = await $api.get('/dishes', { params: params })
	return response.data
}

export const getDailyDishes = async () => {
	const response = await $api.get('/dishes/daily')
	return response.data
}

export const getDishById = async (id: number) => {
	const response = await $api.get('/dishes/' + id)
	return response.data
}

export const getCategories = async () => {
	const response = await $api.get('/categories')
	return response.data
}

export type RecipesParams = {
	page?: number
	amount?: number
	title?: string
	badge?: string
	timeFrom?: string
}

export const getRecipes = async (params?: RecipesParams) => {
	const response = await $api.get('/recipes', { params: params })
	return response.data
}

export const getRecipeById = async (id: number) => {
	const response = await $api.get('/recipes/' + id)
	return response.data
}