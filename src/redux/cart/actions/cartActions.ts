import { CartItem, CartAction, CartActionTypes } from './../types/cartTypes'

export const addToCart = (payload: CartItem): CartAction => ({
	type: CartActionTypes.ADD_TO_CART,
	payload,
})
