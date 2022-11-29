import { productsAPI } from './../../../api/api'
import { Dispatch } from 'redux'
import {
	Product,
	ProductsAction,
	ProductsActionType,
} from './../types/productsTypes'

const setProducts = (payload: Product[]): ProductsAction => ({
	type: ProductsActionType.SET_PRODUCTS,
	payload,
})
const setIsLoading = (payload: boolean): ProductsAction => ({
	type: ProductsActionType.SET_IS_LOADING,
	payload,
})
const setError = (payload: string): ProductsAction => ({
	type: ProductsActionType.SET_ERROR,
	payload,
})

export const getProducts = () => async (dispatch: Dispatch<ProductsAction>) => {
	try {
		dispatch(setIsLoading(true))
		const { data } = await productsAPI.getProducts()
		dispatch(setProducts(data.products))
		dispatch(setIsLoading(false))
	} catch (error) {
		dispatch(setError(`Ошибка при загрузге товаров...${error}`))
	}
}
