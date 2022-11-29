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
}

export enum ProductsActionType {
	SET_PRODUCTS = 'SET_PRODUCTS',
	SET_IS_LOADING = 'SET_IS_LOADING',
	SET_ERROR = 'SET_ERROR',
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

export type ProductsAction = setProducts | setIsLoading | setError
