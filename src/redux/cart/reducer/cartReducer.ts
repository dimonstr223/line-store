import { ICartItem } from './../types/cartTypes'
import { CartAction, CartActionTypes, CartState } from '../types/cartTypes'

const initialState: CartState = {
	cartItems: [],
	totalPrice: 0,
	totalDiscountPrice: 0,
	discount: 0,
}

const cartReducer = (state = initialState, action: CartAction): CartState => {
	switch (action.type) {
		case CartActionTypes.ADD_TO_CART:
			return {
				...state,
				cartItems: [{ ...action.payload, quantity: 1 }, ...state.cartItems],
			}

		case CartActionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(item => item.id !== action.payload),
			}

		case CartActionTypes.INCREMENT_QUANTITY:
			return {
				...state,
				//@ts-ignore
				cartItems: state.cartItems.find(item => item.id === action.payload)
					?.quantity++,
			}

		case CartActionTypes.SET_TOTAL_PRICE:
			return {
				...state,
				totalPrice: state.cartItems.reduce(
					(acc: number, item: ICartItem) => acc + item.price,
					0
				),
			}
		case CartActionTypes.SET_TOTAL_DISCOUNT_PRICE:
			return {
				...state,
				totalDiscountPrice: state.cartItems.reduce(
					(acc: number, item: ICartItem) => {
						const discountPrice = Math.ceil(
							item.price - (item.price / 100) * item.discountPercentage
						)
						return acc + discountPrice
					},
					0
				),
			}
		case CartActionTypes.SET_DISCOUNT:
			return {
				...state,
				discount: state.totalPrice - state.totalDiscountPrice,
			}
		default:
			return state
	}
}

export default cartReducer
