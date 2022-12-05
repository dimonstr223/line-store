import React from 'react'
import { ICartItem } from '../redux/cart/types/cartTypes'

import style from '../scss/components/CartItem.module.scss'
import calcDiscountPrice from '../utils/calcDiscountPrice'

const CartItem: React.FC<ICartItem> = ({
	title,
	thumbnail,
	brand,
	price,
	discountPercentage,
	quantity,
}) => {
	return (
		<div className={style.cart__item}>
			<div className={style.img__wrapper}>
				<img src={thumbnail} alt='Product img' />
			</div>
			<div className={style.about}>
				<h3 className={style.title}>{title}</h3>
				<div>{brand}</div>
			</div>
			<div className={style.wrapper}>
				<div className={style.quantity}>{quantity}</div>
				<div className={style.price}>
					<div className={style.discountPrice}>
						{calcDiscountPrice(price, discountPercentage)}$
					</div>
					<div className={style.prevPrice}>{price} $</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem
