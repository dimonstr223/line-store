import React from 'react'
import { Product } from '../../redux/products/types/productsTypes'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import addToCartIcon from '../../assets/images/add-to-cart-icon.svg'
import cartAddedIcon from '../../assets/images/cart-added-icon.svg'
import calcDiscountPrice from '../../utils/calcDiscountPrice'

import {
	addToCart,
	removeFromCart,
	setTotalQuantity,
} from '../../redux/cart/actions/cartActions'
import useAppSelecror from '../../hooks/useAppSelector'

import style from '../../scss/components/ProductsItem.module.scss'

const ProductsItem: React.FC<Product> = ({
	id,
	thumbnail,
	title,
	brand,
	price,
	discountPercentage,
}) => {
	const { cartItems } = useAppSelecror(state => state.cart)
	const dispatch = useDispatch()

	const onAddToCart = (
		id: number,
		thumbnail: string,
		title: string,
		brand: string,
		price: number,
		discountPercentage: number
	) => {
		dispatch(
			addToCart({
				id,
				thumbnail,
				title,
				brand,
				price,
				discountPercentage,
				quantity: 1,
			})
		)
		dispatch(setTotalQuantity())
	}
	const onRemoveFromCart = (id: number) => {
		dispatch(removeFromCart(id))
		dispatch(setTotalQuantity())
	}

	return (
		<Link to={`/products/${id}`}>
			<div className={style.productItem}>
				<div className={style.img__wrapper}>
					<div className={style.discountPercentage}>
						-{Math.ceil(discountPercentage)}%
					</div>
					<img src={thumbnail} alt='Product' />
				</div>

				<h3 className={style.title}>{title}</h3>

				<div className={style.brand}>{brand}</div>

				<div className={style.wrapper}>
					<div className={style.price}>
						<div className={style.prevPrice}>{price.toLocaleString()} $</div>
						<div className={style.discountPrice}>
							{calcDiscountPrice(price, discountPercentage, 1)} $
						</div>
					</div>
					<Link to='/products'>
						{cartItems.some(item => item.id === id) ? (
							<button
								onClick={() => onRemoveFromCart(id)}
								className={style.removeBtn}
							>
								<img src={cartAddedIcon} alt='Remove' width={35} />
							</button>
						) : (
							<button
								onClick={() =>
									onAddToCart(
										id,
										thumbnail,
										title,
										brand,
										price,
										discountPercentage
									)
								}
								className={style.addBtn}
							>
								<img src={addToCartIcon} alt='Add to cart' width={35} />
							</button>
						)}
					</Link>
				</div>
			</div>
		</Link>
	)
}

export default ProductsItem
