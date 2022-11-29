import { Product, ProductsActionType } from './../types/productsTypes'

const setProducts = (payload: Product[]) => ({
	type: ProductsActionType.SET_PRODUCTS,
	payload,
})
