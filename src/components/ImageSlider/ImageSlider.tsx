import React from 'react'
import Slider from 'react-slick'

import style from '../../scss/components/ImageSlider.module.scss'

interface ImageSliderProps {
	images: string[] | undefined
	id: number | undefined
}
const ImageSlider: React.FC<ImageSliderProps> = ({ images, id }) => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
	}

	return (
		<div className={style.container}>
			<Slider {...settings}>
				{images?.map(item => (
					<div key={id} className={style.image__wrapper}>
						<img className={style.image} src={item} alt='image' width={100} />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default ImageSlider
