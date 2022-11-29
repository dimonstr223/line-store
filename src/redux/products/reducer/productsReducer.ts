import {
	ProductsState,
	ProductsAction,
	ProductsActionType,
} from './../types/productsTypes'

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
		case ProductsActionType.SET_PRODUCTS:
			return { ...state, products: action.payload }
		case ProductsActionType.SET_ERROR:
			return { ...state, error: action.payload }
		case ProductsActionType.SET_IS_LOADING:
			return { ...state, isLoading: action.payload }
		default:
			return state
	}
}

export default productsReducer
