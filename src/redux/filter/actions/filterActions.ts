import { FilterAction, FilterActionType } from './../types/filterTypes'

export const setSearchValue = (payload: string): FilterAction => ({
	type: FilterActionType.SET_SEARCH_VALUE,
	payload,
})
