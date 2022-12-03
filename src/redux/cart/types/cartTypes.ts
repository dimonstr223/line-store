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
}
export enum CartActionTypes {
	ADD_TO_CART = 'ADD_TO_CART',
}
interface addToCart {
	type: CartActionTypes.ADD_TO_CART
	payload: ICartItem
}

export type CartAction = addToCart
