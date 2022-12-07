import {
	ImageSliderAcionType,
	ImageSliderAction,
} from './../types/imageSliderTypes'
import { imageSliderState } from '../types/imageSliderTypes'

const initialState: imageSliderState = {
	currentIndex: 0,
}

const imageSliderReducer = (
	state = initialState,
	action: ImageSliderAction
) => {
	switch (action.type) {
		case ImageSliderAcionType.SET_CURRENT_INDEX:
			return { ...state, currentIndex: action.payload }
		default:
			return state
	}
}

export default imageSliderReducer
