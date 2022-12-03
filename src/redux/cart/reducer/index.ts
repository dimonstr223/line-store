import { CartAction, CartState } from './../types/cartTypes'

const initialState: CartState = {
	cartItems: [],
}

const cartReducer = (state = initialState, action: CartAction): CartState => {
	switch (action.type) {
		default:
			return state
	}
}

export default cartReducer
