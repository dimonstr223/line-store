import { combineReducers } from 'redux'
import categoriesReducer from './categories/reducer/categoriesReducer'
import productsReducer from './products/reducer/productsReducer'

const rootReducer = combineReducers({
	products: productsReducer,
	categories: categoriesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
