import {
	ProductsState,
	ProductsAction,
	ProductsActionType,
} from './../types/productsTypes'

const initialState: ProductsState = {
	products: [],
	singleProduct: null,
	isLoading: false,
	error: null,
	categoryName: '',
	limit: 12,
	skipProducts: 0,
	totalProducts: 0,
	currentPage: 1,
}

const productsReducer = (state = initialState, action: ProductsAction): ProductsState => {
	switch (action.type) {
		case ProductsActionType.SET_PRODUCTS:
			return { ...state, products: action.payload }
		case ProductsActionType.SET_SINGLE_PRODUCTS:
			return { ...state, singleProduct: action.payload }
		case ProductsActionType.SET_ERROR:
			return { ...state, error: action.payload }
		case ProductsActionType.SET_IS_LOADING:
			return { ...state, isLoading: action.payload }
		case ProductsActionType.SET_CATEGORY_NAME:
			return { ...state, categoryName: action.payload }
		case ProductsActionType.SET_SKIP_PRODUCTS:
			return { ...state, skipProducts: action.payload }
		case ProductsActionType.SET_TOTAL_PRODUCTS:
			return { ...state, totalProducts: action.payload }
		case ProductsActionType.SET_CURRENT_PAGE:
			return { ...state, currentPage: action.payload }
		case ProductsActionType.SORT_PRODUCTS:
			switch (action.payload) {
				case 'order':
					return {
						...state,
						products: [...state.products].sort((a, b) => a.id - b.id),
					}
				case 'price':
					return {
						...state,
						products: [...state.products].sort((a, b) => a.price - b.price),
					}
				case 'rating':
					return {
						...state,
						products: [...state.products].sort((a, b) => a.rating - b.rating),
					}
			}
		default:
			return state
	}
}

export default productsReducer
