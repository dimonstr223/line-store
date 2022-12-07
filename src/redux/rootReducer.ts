import { combineReducers } from 'redux'
import cartReducer from './cart/reducer/cartReducer'
import categoriesReducer from './categories/reducer/categoriesReducer'
import filterReducer from './filter/reducer/filterReducer'
import imageSliderReducer from './imageSlider/reducer/imageSliderReducer'
import productsReducer from './products/reducer/productsReducer'

const rootReducer = combineReducers({
	products: productsReducer,
	categories: categoriesReducer,
	filter: filterReducer,
	cart: cartReducer,
	imageSlider: imageSliderReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
