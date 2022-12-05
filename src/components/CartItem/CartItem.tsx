import React from 'react'

import { useAppDispatch } from '../../hooks/useAppDispatch'
import { removeFromCart } from '../../redux/cart/actions/cartActions'
import { ICartItem } from '../../redux/cart/types/cartTypes'

import calcDiscountPrice from '../../utils/calcDiscountPrice'
import style from '../../scss/components/CartItem.module.scss'
import Quantity from './Quantity/Quantity'

const CartItem: React.FC<ICartItem> = ({
	id,
	title,
	thumbnail,
	brand,
	price,
	discountPercentage,
	quantity,
}) => {
	const dispatch = useAppDispatch()

	const onRemoveFromCart = (id: number) => {
		dispatch(removeFromCart(id))
	}
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
				{quantity && <Quantity quantity={quantity} />}
				<div className={style.price}>
					<div className={style.discountPrice}>
						{calcDiscountPrice(price, discountPercentage)}$
					</div>
					<div className={style.prevPrice}>{price} $</div>

					<button
						onClick={() => onRemoveFromCart(id)}
						className={style.removeBtn}
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartItem
