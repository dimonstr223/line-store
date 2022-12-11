import React from 'react'
import { useDispatch } from 'react-redux'

import useAppSelecror from '../../hooks/useAppSelector'
import { setCurrentIndex } from '../../redux/imageSlider/actions/imageSliderActions'

import style from '../../scss/components/ImageSlider.module.scss'

interface ImageSliderProps {
	images: string[] | undefined
	id: number | undefined
}
const ImageSlider: React.FC<ImageSliderProps> = ({ images, id }) => {
	const { currentIndex } = useAppSelecror(state => state.imageSlider)
	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch(setCurrentIndex(0))
	}, [id])

	const slideStyle = {
		backgroundImage: `url(${images && images[currentIndex]})`,
	}
	const onPrevious = () => {
		const newIndex =
			images && currentIndex === 0 ? images.length - 1 : currentIndex - 1
		newIndex >= 0 && dispatch(setCurrentIndex(newIndex))
	}
	const onNext = () => {
		const newIndex =
			images && currentIndex === images.length - 1 ? 0 : currentIndex + 1
		newIndex >= 0 && dispatch(setCurrentIndex(newIndex))
	}

	const onDotClick = (index: number) => {
		dispatch(setCurrentIndex(index))
	}

	return (
		<div className={style.slider}>
			<div className={style.sliderDots}>
				{images?.map((item, index) => (
					<div
						onClick={() => onDotClick(index)}
						key={index}
						className={index === currentIndex ? style.activeDot : style.item}
					>
						<img src={item} alt='image' />
					</div>
				))}
			</div>
			<div className={style.sliderWrapper}>
				<div className={style.leftArrow} onClick={onPrevious}>
					{'〈'}
				</div>
				<div className={style.rightArrow} onClick={onNext}>
					{'〉'}
				</div>
				<div className={style.slide} style={slideStyle}></div>
			</div>
		</div>
	)
}

export default ImageSlider