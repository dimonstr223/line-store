export type sortParam = 'order' | 'price' | 'rating'

export interface FilterState {
	searchValue: string
	isLoading: boolean
	error: string | null
	isPopupOpened: boolean
	sortParam: sortParam
}

export enum FilterActionType {
	SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
	SET_IS_LOADING = 'SET_IS_LOADING',
	SET_ERROR = 'SET_ERROR',
	SET_IS_POPUP_OPENED = 'SET_IS_POPUP_OPENED',
	SET_SORT_PARAM = 'SET_SORT_PARAM',
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
interface setSortParam {
	type: FilterActionType.SET_SORT_PARAM
	payload: sortParam
}

export type FilterAction =
	| setSearchValue
	| setIsLoadin
	| setError
	| setIsPopupOpened
	| setSortParam
