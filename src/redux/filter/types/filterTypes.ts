export interface FilterState {
	searchValue: string
	isLoading: boolean
}

export enum FilterActionType {
	SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
	SET_IS_LOADING = 'SET_IS_LOADING',
	SET_ERROR = 'SET_ERROR',
}

interface setSearchValue {
	type: FilterActionType.SET_SEARCH_VALUE
	payload: string
}
interface setIsLoadin {
	type: FilterActionType.SET_IS_LOADING
	payload: boolean
}
interface setError {
	type: FilterActionType.SET_ERROR
	payload: string
}

export type FilterAction = setSearchValue | setIsLoadin | setError
