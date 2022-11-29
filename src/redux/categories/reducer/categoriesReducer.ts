import { CategoriesState, CategorisAction } from './../types/categoriesTypes'
const initialState: CategoriesState = {
	categories: [],
	isLoading: false,
	error: null,
}

const categoriesReducer = (
	state = initialState,
	action: CategorisAction
): CategoriesState => {
	switch (action.type) {
		default:
			return state
	}
}

export default categoriesReducer
