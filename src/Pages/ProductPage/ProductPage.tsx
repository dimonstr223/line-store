import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import { productsAPI } from '../../api/api'
import ImageSlider from '../../components/ImageSlider'
import useAppSelecror from '../../hooks/useAppSelector'
import {
	addToCart,
	removeFromCart,
	setTotalInfo,
} from '../../redux/cart/actions/cartActions'
import {
	getProductsOfCategory,
	getSingleProduct,
} from '../../redux/products/actions/productsAction'

import style from '../../scss/components/ProductPage.module.scss'
import calcDiscountPrice from '../../utils/calcDiscountPrice'

const ProductPage: React.FC = () => {
	const { singleProduct, products } = useAppSelecror(state => state.products)
	const { cartItems } = useAppSelecror(state => state.cart)
	const dispatch: any = useDispatch()
	const { id } = useParams()

	React.useEffect(() => {
		singleProduct && getProductsOfCategory(singleProduct?.category)
	}, [])

	React.useEffect(() => {
		id && dispatch(getSingleProduct(id))
	}, [id])

	React.useEffect(() => {
		dispatch(setTotalInfo())
	}, [cartItems])

	const onAddToCart = () => {
		singleProduct && dispatch(addToCart({ ...singleProduct, quantity: 1 }))
	}
	const onRemoveFromCart = () => {
		singleProduct && dispatch(removeFromCart(singleProduct.id))
	}

	return (
		<div className={style.productPage}>
			<h1 className={style.title}>
				{singleProduct?.brand} / {singleProduct?.title}
			</h1>
			<div className={style.rating}>
				<Rating
					initialValue={singleProduct?.rating}
					readonly={true}
					allowFraction={true}
					size={30}
				/>
			</div>
			<div className={style.info}>
				<div className={style.slider__container}>
					<ImageSlider images={singleProduct?.images} />
				</div>
				<div className={style.infoPanel}>
					<div className={style.mainInfo}>
						<div className={style.price}>
							<div className={style.discountPrice}>
								{singleProduct &&
									calcDiscountPrice(
										singleProduct?.price,
										singleProduct?.discountPercentage,
										1
									)}{' '}
								$
							</div>
							<div className={style.prevPrice}>{singleProduct?.price} $</div>
						</div>
						{cartItems.some(item => item.id === singleProduct?.id) ? (
							<button
								onClick={onRemoveFromCart}
								className={style.removeFromCartBtn}
							>
								Remove from cart
							</button>
						) : (
							<button onClick={onAddToCart} className={style.addToCartBtn}>
								Add to cart{' '}
							</button>
						)}
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
			<div className={style.similar}>
				<h3 className={style.similar__title}>Similar</h3>
				<ul className={style.similar__products}>
					{products
						.slice(0, 5)
						.filter(item => item.id !== singleProduct?.id)
						.map(item => (
							<Link to={`/products/${item.id}`} className={style.similar__item}>
								<img
									src={item.thumbnail}
									alt='image'
									width={150}
									height={150}
								/>
							</Link>
						))}
				</ul>
			</div>
		</div>
	)
}

export default ProductPage
