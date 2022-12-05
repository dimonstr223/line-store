import { ICartItem } from './../types/cartTypes'
import { CartAction, CartActionTypes, CartState } from '../types/cartTypes'

const initialState: CartState = {
	cartItems: [],
	totalPrice: 0,
	totalDiscountPrice: 0,
	discount: 0,
	totalQuantity: 0,
}

const cartReducer = (state = initialState, action: CartAction): CartState => {
	switch (action.type) {
		case CartActionTypes.ADD_TO_CART:
			return {
				...state,
				cartItems: [{ ...action.payload }, ...state.cartItems],
			}

		case CartActionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(item => item.id !== action.payload),
			}
		case CartActionTypes.INCREASE_QUANTITY: {
			const stateCopy = {
				...state,
				cartItems: state.cartItems.map(item => ({
					...item,
				})),
			}
			const findItemIndex = stateCopy.cartItems.findIndex(
				item => item.id === action.payload
			)
			stateCopy.cartItems[findItemIndex].quantity++
			return stateCopy
		}
		case CartActionTypes.DECREASE_QUANTITY: {
			const stateCopy = {
				...state,
				cartItems: state.cartItems.map(item => ({
					...item,
				})),
			}
			const findItemIndex = stateCopy.cartItems.findIndex(
				item => item.id === action.payload
			)
			stateCopy.cartItems[findItemIndex].quantity--
			return stateCopy
		}
		case CartActionTypes.SET_TOTAL_PRICE:
			return {
				...state,
				totalPrice: state.cartItems.reduce(
					(acc: number, item: ICartItem) => acc + item.price * item.quantity,
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
						return acc + discountPrice * item.quantity
					},
					0
				),
			}
		case CartActionTypes.SET_DISCOUNT:
			return {
				...state,
				discount: state.totalPrice - state.totalDiscountPrice,
			}
		case CartActionTypes.SET_TOTAL_QUANTITY:
			return {
				...state,
				totalQuantity: state.cartItems.reduce(
					(acc, item) => acc + item.quantity,
					0
				),
			}
		default:
			return state
	}
}

export default cartReducer
