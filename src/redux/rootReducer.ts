import { combineReducers } from 'redux'
import productsReducer from './products/reducer/productsReducer'

const rootReducer = combineReducers({
	products: productsReducer,
})

export default rootReducer
