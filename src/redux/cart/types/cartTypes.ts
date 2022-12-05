export interface ICartItem {
	id: number
	title: string
	price: number
	discountPercentage: number
	brand: string
	thumbnail: string
	quantity: number
}

export interface CartState {
	cartItems: ICartItem[]
	totalPrice: number
	totalDiscountPrice: number
	discount: number
	totalQuantity: number
}
export enum CartActionTypes {
	ADD_TO_CART = 'ADD_TO_CART',
	REMOVE_FROM_CART = 'REMOVE_FROM_CART',
	INCREASE_QUANTITY = 'INCREASE_QUANTITY',
	DECREASE_QUANTITY = 'DECREASE_QUANTITY',
	SET_TOTAL_PRICE = 'SET_TOTAL_PRICE',
	SET_TOTAL_DISCOUNT_PRICE = 'SET_TOTAL_DISCOUNT_PRICE',
	SET_DISCOUNT = 'SET_DISCOUNT',
	SET_TOTAL_QUANTITY = 'SET_TOTAL_QUANTITY',
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
interface increaseQuantity {
	type: CartActionTypes.INCREASE_QUANTITY
	payload: number
}
interface decreaseQuantity {
	type: CartActionTypes.DECREASE_QUANTITY
	payload: number
}
interface setTotalQuantity {
	type: CartActionTypes.SET_TOTAL_QUANTITY
}

export type CartAction =
	| addToCart
	| removeFromCart
	| increaseQuantity
	| decreaseQuantity
	| setTotalPrice
	| setTotalDiscountPrice
	| setDiscount
	| setTotalQuantity
