export type SortParam = 'order' | 'price' | 'rating'

export interface FilterState {
	searchValue: string
	isLoading: boolean
	error: string | null
	isPopupOpened: boolean
	sortingParam: SortParam
}

export enum FilterActionType {
	SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
	SET_IS_LOADING = 'SET_IS_LOADING',
	SET_ERROR = 'SET_ERROR',
	SET_IS_POPUP_OPENED = 'SET_IS_POPUP_OPENED',
	SET_SORTING_PARAM = 'SET_SORT_PARAM',
	SORT_PRODUCTS = 'SORT_PRODUCTS',
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
interface setIsPopupOpened {
	type: FilterActionType.SET_IS_POPUP_OPENED
	payload: boolean
}
interface setSortingParam {
	type: FilterActionType.SET_SORTING_PARAM
	payload: SortParam
}

export type FilterAction =
	| setSearchValue
	| setIsLoadin
	| setError
	| setIsPopupOpened
	| setSortingParam
