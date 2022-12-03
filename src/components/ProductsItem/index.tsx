import React from 'react'
import { Product } from '../../redux/products/types/productsTypes'

import addToCartIcon from '../../assets/images/add-to-cart-icon.svg'
import calcDiscountPrice from '../../utils/calcDiscountPrice'

import style from '../../scss/components/ProductsItem.module.scss'
import { useDispatch } from 'react-redux'
import { addToCart, setTotalPrice } from '../../redux/cart/actions/cartActions'

const ProductsItem: React.FC<Product> = ({
	id,
	thumbnail,
	title,
	brand,
	price,
	discountPercentage,
}) => {
	const dispatch: any = useDispatch()

	const onAddToCart = (
		id: number,
		thumbnail: string,
		title: string,
		brand: string,
		price: number,
		discountPercentage: number
	) => {
		dispatch(
			addToCart({ id, thumbnail, title, brand, price, discountPercentage })
		)
	}

	return (
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
						{calcDiscountPrice(price, discountPercentage)} $
					</div>
				</div>
				<button
					onClick={() =>
						onAddToCart(id, thumbnail, title, brand, price, discountPercentage)
					}
					className={style.addBtn}
				>
					<img src={addToCartIcon} alt='Add to cart' width={35} />
				</button>
			</div>
		</div>
	)
}

export default ProductsItem
