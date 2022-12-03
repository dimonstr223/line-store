import { ICartItem } from './../types/cartTypes'
import { CartAction, CartActionTypes, CartState } from '../types/cartTypes'

const initialState: CartState = {
	cartItems: [],
	totalPrice: 0,
}

const cartReducer = (state = initialState, action: CartAction): CartState => {
	switch (action.type) {
		case CartActionTypes.ADD_TO_CART:
			return { ...state, cartItems: [...state.cartItems, action.payload] }
		case CartActionTypes.SET_TOTAL_PRICE:
			return {
				...state,
				totalPrice: state.cartItems.reduce(
					(acc: number, item: ICartItem) => acc + item.price,
					0
				),
			}
		default:
			return state
	}
}

export default cartReducer
