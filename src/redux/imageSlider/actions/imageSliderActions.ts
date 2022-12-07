import {
	ImageSliderAction,
	ImageSliderAcionType,
} from './../types/imageSliderTypes'

export const setCurrentIndex = (payload: number): ImageSliderAction => ({
	type: ImageSliderAcionType.SET_CURRENT_INDEX,
	payload,
})
