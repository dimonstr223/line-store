import { ICartItem, CartAction, CartActionTypes } from './../types/cartTypes'

export const addToCart = (payload: ICartItem): CartAction => ({
	type: CartActionTypes.ADD_TO_CART,
	payload,
})
export const setTotalPrice = (): CartAction => ({
	type: CartActionTypes.SET_TOTAL_PRICE,
})
export const setTotalDiscountPrice = (): CartAction => ({
	type: CartActionTypes.SET_TOTAL_DISCOUNT_PRICE,
})
