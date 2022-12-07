export interface imageSliderState {
	currentIndex: number
}

export enum ImageSliderAcionType {
	SET_CURRENT_INDEX = 'SET_CURRENT_INDEX',
}

interface setCurrentIndex {
	type: ImageSliderAcionType.SET_CURRENT_INDEX
	payload: number
}

export type ImageSliderAction = setCurrentIndex
