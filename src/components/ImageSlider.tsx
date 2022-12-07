import React from 'react'
import useAppSelecror from '../hooks/useAppSelector'

interface ImageSliderProps {
	images: string[] | undefined
}
const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
	const { currentIndex } = useAppSelecror(state => state.imageSlider)

	return (
		<div>
			<div
				style={{ backgroundImage: `url(${images && images[currentIndex]})` }}
			></div>
		</div>
	)
}

export default ImageSlider
