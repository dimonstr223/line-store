import { combineReducers } from 'redux'
import categoriesReducer from './categories/reducer/categoriesReducer'
import filterReducer from './filter/reducer/filterReducer'
import productsReducer from './products/reducer/productsReducer'

const rootReducer = combineReducers({
	products: productsReducer,
	categories: categoriesReducer,
	filter: filterReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
