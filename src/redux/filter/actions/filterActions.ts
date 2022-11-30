import { ProductsAction } from './../../products/types/productsTypes'
import { setProducts } from './../../products/actions/productsAction'
import { productsAPI } from './../../../api/api'
import { Dispatch } from 'redux'
import { FilterAction, FilterActionType } from './../types/filterTypes'

export const setSearchValue = (payload: string): FilterAction => ({
	type: FilterActionType.SET_SEARCH_VALUE,
	payload,
})

export const getProudctsFromSearch =
	(searchValue: string) =>
	async (dispatch: Dispatch<FilterAction | ProductsAction>) => {
		const { data } = await productsAPI.getProudctsFromSearch(searchValue)
		dispatch(setProducts(data.products))
	}
