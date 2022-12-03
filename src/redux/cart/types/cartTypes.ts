export interface CartItem {
	id: number
	title: string
	price: number
	discountPercentage: number
	brand: string
	thumbnail: string
}

export interface CartState {
	cartItems: CartItem[]
}
export enum CartActionTypes {
	ADD_TO_CART = 'ADD_TO_CART',
}
interface addToCart {
	type: CartActionTypes.ADD_TO_CART
	payload: CartItem
}

export type CartAction = addToCart
