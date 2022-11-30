export interface FilterState {
	searchValue: string
}

export enum FilterActionType {
	SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
}

interface setSearchValue {
	type: FilterActionType.SET_SEARCH_VALUE
	payload: string
}

export type FilterAction = setSearchValue
