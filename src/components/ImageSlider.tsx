import React from 'react'
import useAppSelecror from '../hooks/useAppSelector'

import style from '../scss/components/ImageSlider.module.scss'

interface ImageSliderProps {
	images: string[] | undefined
}
const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
	const { currentIndex } = useAppSelecror(state => state.imageSlider)

	const slideStyle = {
		backgroundImage: `url(${images && images[currentIndex]})`,
	}

	return (
		<div className={style.slider}>
			<div className={style.slide} style={slideStyle}></div>
		</div>
	)
}

export default ImageSlider
