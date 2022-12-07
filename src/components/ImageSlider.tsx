import React from 'react'

interface ImageSliderProps {
	images: string[] | undefined
}
const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
	return (
		<div>
			<div style={{ backgroundImage: `url(${images && images[0]})` }}></div>
		</div>
	)
}

export default ImageSlider
