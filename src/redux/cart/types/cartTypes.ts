export interface ICartItem {
	id: number
	title: string
	price: number
	discountPercentage: number
	brand: string
	thumbnail: string
	quantity?: number
}

export interface CartState {
	cartItems: ICartItem[]
	totalPrice: number
	totalDiscountPrice: number
	discount: number
}
export enum CartActionTypes {
	ADD_TO_CART = 'ADD_TO_CART',
	SET_TOTAL_PRICE = 'SET_TOTAL_PRICE',
	SET_TOTAL_DISCOUNT_PRICE = 'SET_TOTAL_DISCOUNT_PRICE',
	SET_DISCOUNT = 'SET_DISCOUNT',
}
interface addToCart {
	type: CartActionTypes.ADD_TO_CART
	payload: ICartItem
}
interface setTotalPrice {
	type: CartActionTypes.SET_TOTAL_PRICE
}
interface setTotalDiscountPrice {
	type: CartActionTypes.SET_TOTAL_DISCOUNT_PRICE
}
interface setDiscount {
	type: CartActionTypes.SET_DISCOUNT
}

export type CartAction =
	| addToCart
	| setTotalPrice
	| setTotalDiscountPrice
	| setDiscount
