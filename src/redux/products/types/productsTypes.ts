export interface Product {
	id: number
	title: string
	description: string
	price: number
	discountPercentage: number
	rating: number
	stock: number
	brand: string
	category: string
	thumbnail: string
	images: string[]
}

export interface ProductsState {
	products: Product[]
	isLoading: boolean
	error: null | string
	categoryName: string
	limit: number
	skipProducts: number
	totalProducts: number
}

export enum ProductsActionType {
	SET_PRODUCTS = 'SET_PRODUCTS',
	SET_IS_LOADING = 'SET_IS_LOADING',
	SET_ERROR = 'SET_ERROR',
	SET_CATEGORY_NAME = 'SET_CATEGORY_NAME',
	INCREMENT_SKIP_PRODUCTS = 'INCREMENT_SKIP_PRODUCTS',
	DECREMENT_SKIP_PRODUCTS = 'DECREMENT_SKIP_PRODUCTS',
	SET_TOTAL_PRODUCTS = 'SET_TOTAL_PRODUCTS',
}

interface setProducts {
	type: ProductsActionType.SET_PRODUCTS
	payload: Product[]
}
interface setIsLoading {
	type: ProductsActionType.SET_IS_LOADING
	payload: boolean
}
interface setError {
	type: ProductsActionType.SET_ERROR
	payload: string
}
interface setCategoryName {
	type: ProductsActionType.SET_CATEGORY_NAME
	payload: string
}
interface incrementSkipProducts {
	type: ProductsActionType.INCREMENT_SKIP_PRODUCTS
}
interface decrementSkipProducts {
	type: ProductsActionType.DECREMENT_SKIP_PRODUCTS
}
interface setTotalProducts {
	type: ProductsActionType.SET_TOTAL_PRODUCTS
	payload: number
}

export type ProductsAction =
	| setProducts
	| setIsLoading
	| setError
	| setCategoryName
	| incrementSkipProducts
	| decrementSkipProducts
	| setTotalProducts
