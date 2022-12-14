import { Product, ProductsAction } from './../../products/types/productsTypes'
import {
	setProducts,
	setTotalProducts,
} from './../../products/actions/productsAction'
import { productsAPI } from './../../../api/api'
import { Dispatch } from 'redux'
import {
	FilterAction,
	FilterActionType,
	SortParam,
} from './../types/filterTypes'

export const setSearchValue = (payload: string): FilterAction => ({
	type: FilterActionType.SET_SEARCH_VALUE,
	payload,
})

const setIsLoadin = (payload: boolean): FilterAction => ({
	type: FilterActionType.SET_IS_LOADING,
	payload,
})
const setError = (payload: string): FilterAction => ({
	type: FilterActionType.SET_ERROR,
	payload,
})
export const setIsPopupOpened = (payload: boolean): FilterAction => ({
	type: FilterActionType.SET_IS_POPUP_OPENED,
	payload,
})

export const setSortingParam = (
	payload: SortParam
): FilterAction | ProductsAction => ({
	type: FilterActionType.SET_SORTING_PARAM,
	payload,
})

export const getProudctsFromSearch =
	(searchValue: string) =>
	async (dispatch: Dispatch<FilterAction | ProductsAction>) => {
		try {
			dispatch(setIsLoadin(true))
			const { data } = await productsAPI.getProudctsFromSearch(searchValue)
			dispatch(setProducts(data.products))
			dispatch(setTotalProducts(data.total))
			dispatch(setIsLoadin(false))
		} catch (error) {
			dispatch(setError(`Ошибка при загрузке продукто...${error}`))
		}
	}
