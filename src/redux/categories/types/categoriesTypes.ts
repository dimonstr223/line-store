export interface CategoriesState {
	categories: string[]
	isLoading: boolean
	error: null | string
}

export enum CategoriesActionType {
	SET_CATEGORIES = 'SET_CATEGORIES',
	SET_IS_LOADING = 'SET_IS_LOADING',
	SET_ERROR = 'SET_ERROR',
}

interface setCategories {
	type: CategoriesActionType.SET_CATEGORIES
	payload: string[]
}
interface setIsLoading {
	type: CategoriesActionType.SET_IS_LOADING
	payload: boolean
}

interface setError {
	type: CategoriesActionType.SET_ERROR
	payload: string
}

export type CategorisAction = setCategories | setError | setIsLoading
