import { ICartItem, CartAction, CartActionTypes } from './../types/cartTypes'

export const addToCart = (payload: ICartItem): CartAction => ({
	type: CartActionTypes.ADD_TO_CART,
	payload,
})
