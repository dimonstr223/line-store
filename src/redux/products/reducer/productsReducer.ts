import {
	ProductsState,
	ProductsAction,
	ProductsActionType,
} from './../types/productsTypes'

const initialState: ProductsState = {
	products: [],
	isLoading: false,
	error: null,
	categoryName: '',
	limit: 8,
	skipProducts: 0,
	totalProducts: 0
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
		case ProductsActionType.SET_CATEGORY_NAME:
			return { ...state, categoryName: action.payload }
		default:
			return state
	}
}

export default productsReducer
