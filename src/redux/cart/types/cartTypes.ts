export interface CartItem {
	id: 1
	title: 'iPhone 9'
	price: 549
	discountPercentage: 12.96
	brand: 'Apple'
	thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
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
