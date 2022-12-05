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
	REMOVE_FROM_CART = 'REMOVE_FROM_CART',
	INCREMENT_QUANTITY = 'INCREMENT_QUANTITY',
	DECREMENT_QUANTITY = 'DECREMENT_QUANTITY',
	SET_TOTAL_PRICE = 'SET_TOTAL_PRICE',
	SET_TOTAL_DISCOUNT_PRICE = 'SET_TOTAL_DISCOUNT_PRICE',
	SET_DISCOUNT = 'SET_DISCOUNT',
}
interface addToCart {
	type: CartActionTypes.ADD_TO_CART
	payload: ICartItem
}
interface removeFromCart {
	type: CartActionTypes.REMOVE_FROM_CART
	payload: number
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
interface incrementQuantity {
	type: CartActionTypes.INCREMENT_QUANTITY
	payload: number
}
interface decrementQuantity {
	type: CartActionTypes.DECREMENT_QUANTITY
	payload: number
}

export type CartAction =
	| addToCart
	| removeFromCart
	| incrementQuantity
	| decrementQuantity
	| setTotalPrice
	| setTotalDiscountPrice
	| setDiscount
