import { ProductsState, ProductsAction } from './../types/productsTypes'

const initialState: ProductsState = {
	products: [],
	isLoading: false,
	error: null,
}

const productsReducer = (
	state = initialState,
	action: ProductsAction
): ProductsState => {
	switch (action.type) {
		default:
			return state
	}
}

export default productsReducer
