import { categoriesAPI } from './../../../api/api'
import { Dispatch } from 'redux'
import {
	CategorisAction,
	CategoriesActionType,
} from './../types/categoriesTypes'
const setCategories = (payload: string[]): CategorisAction => ({
	type: CategoriesActionType.SET_CATEGORIES,
	payload,
})
const setIsLoading = (payload: boolean): CategorisAction => ({
	type: CategoriesActionType.SET_IS_LOADING,
	payload,
})
const setError = (payload: string): CategorisAction => ({
	type: CategoriesActionType.SET_ERROR,
	payload,
})

export const getCategories =
	() => async (dispatch: Dispatch<CategorisAction>) => {
		try {
			dispatch(setIsLoading(true))
			const { data } = await categoriesAPI.getCategories()
			dispatch(setCategories(data))
			dispatch(setIsLoading(false))
		} catch (error) {
			dispatch(setError(`Ошибка при загрузге категорий...${error}`))
		}
	}
