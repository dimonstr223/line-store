export interface ICartItem {
	id: number
	title: string
	price: number
	discountPercentage: number
	brand: string
	thumbnail: string
}

export interface CartState {
	cartItems: ICartItem[]
	totalPrice: number
}
export enum CartActionTypes {
	ADD_TO_CART = 'ADD_TO_CART',
	SET_TOTAL_PRICE = 'SET_TOTAL_PRICE',
}
interface addToCart {
	type: CartActionTypes.ADD_TO_CART
	payload: ICartItem
}
interface setTotalPrice {
	type: CartActionTypes.SET_TOTAL_PRICE
}

export type CartAction = addToCart | setTotalPrice
