import { CartAction, CartActionTypes, CartState } from './../types/cartTypes'

const initialState: CartState = {
	cartItems: [],
}

const cartReducer = (state = initialState, action: CartAction): CartState => {
	switch (action.type) {
		case CartActionTypes.ADD_TO_CART:
			return { ...state, cartItems: action.payload }
		default:
			return state
	}
}

export default cartReducer
