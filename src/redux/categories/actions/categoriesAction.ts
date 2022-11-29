import {
	CategorisAction,
	CategoriesActionType,
} from './../types/categoriesTypes'
const setCategories = (payload: string[]): CategorisAction => ({
	type: CategoriesActionType.SET_CATEGORIES,
	payload,
})
const setIsLoading = (payload: boolean): CategorisAction => ({
	type: CategoriesActionType.SET_IS_LOADING,
	payload,
})
const setError = (payload: string): CategorisAction => ({
	type: CategoriesActionType.SET_ERROR,
	payload,
})
