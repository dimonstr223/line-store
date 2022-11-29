export interface CategoriesState {
	categories: string[]
	isLoading: boolean
	error: null | string
	isOpened: boolean
}

export enum CategoriesActionType {
	SET_CATEGORIES = 'SET_CATEGORIES',
	SET_IS_LOADING = 'SET_IS_LOADING',
	SET_ERROR = 'SET_ERROR',
	SET_IS_OPENED = 'SET_IS_OPENED',
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
interface setIsOpened {
	type: CategoriesActionType.SET_IS_OPENED
	payload: boolean
}

export type CategorisAction =
	| setCategories
	| setError
	| setIsLoading
	| setIsOpened
