import { Product, ProductsActionType } from './../types/productsTypes'

const setProducts = (payload: Product[]) => ({
	type: ProductsActionType.SET_PRODUCTS,
	payload,
})
const setIsLoading = (payload: boolean) => ({
	type: ProductsActionType.SET_IS_LOADING,
	payload,
})
