import { Dispatch } from 'redux'
import { ICartItem, CartAction, CartActionTypes } from './../types/cartTypes'

export const addToCart = (payload: ICartItem): CartAction => ({
	type: CartActionTypes.ADD_TO_CART,
	payload,
})
export const removeFromCart = (payload: number): CartAction => ({
	type: CartActionTypes.REMOVE_FROM_CART,
	payload,
})
const setTotalPrice = (): CartAction => ({
	type: CartActionTypes.SET_TOTAL_PRICE,
})
const setTotalDiscountPrice = (): CartAction => ({
	type: CartActionTypes.SET_TOTAL_DISCOUNT_PRICE,
})
const setDiscount = (): CartAction => ({
	type: CartActionTypes.SET_DISCOUNT,
})
export const incrementQuantity = (payload: number): CartAction => ({
	type: CartActionTypes.INCREMENT_QUANTITY,
	payload,
})

export const setTotalInfo = () => (dispatch: Dispatch<CartAction>) => {
	dispatch(setTotalPrice())
	dispatch(setTotalDiscountPrice())
	dispatch(setDiscount())
}
