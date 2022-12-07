import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ImageSlider from '../../components/ImageSlider'
import useAppSelecror from '../../hooks/useAppSelector'
import { getSingleProduct } from '../../redux/products/actions/productsAction'

import style from '../../scss/components/ProductPage.module.scss'

const ProductPage: React.FC = () => {
	const { singleProduct } = useAppSelecror(state => state.products)
	const dispatch: any = useDispatch()
	const { id } = useParams()
	React.useEffect(() => {
		id && dispatch(getSingleProduct(id))
	}, [id])

	return (
		<div className={style.productPage}>
			<h1 className={style.title}>
				{singleProduct?.brand} / {singleProduct?.title}
			</h1>
			<div className={style.rating}>********({singleProduct?.rating})</div>
			<div className={style.info}>
				<div className={style.slider__container}>
					<ImageSlider images={singleProduct?.images} />
				</div>
				<div className={style.infoPanel}>
					<div className={style.mainInfo}>
						<div className={style.price}>
							<div className={style.discountPrice}>
								{singleProduct?.price} $
							</div>
							<div className={style.prevPrice}>{singleProduct?.price} $</div>
						</div>
						<button className={style.addToCartBtn}>Add to cart</button>
						<div className={style.stock}>Stock: {singleProduct?.stock}</div>
					</div>
					<div className={style.description}>
						<h3 className={style.description__title}>Description</h3>
						<p className={style.description__text}>
							{singleProduct?.description}
						</p>
					</div>
				</div>
			</div>
			<h3 className={style.similar__title}>Similar</h3>
			<ul className={style.similar__products}>
				<li className={style.similar__item}>Product</li>
			</ul>
		</div>
	)
}

export default ProductPage
