import { FilterState, FilterAction } from './../types/filterTypes'

const initialState: FilterState = {
	searchValue: '',
}

const filterReducer = (
	state = initialState,
	action: FilterAction
): FilterState => {
	switch (action.type) {
		default:
			return state
	}
}

export default filterReducer
