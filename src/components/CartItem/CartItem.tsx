import React from 'react'

import { useAppDispatch } from '../../hooks/useAppDispatch'
import { removeFromCart } from '../../redux/cart/actions/cartActions'
import { ICartItem } from '../../redux/cart/types/cartTypes'

import calcDiscountPrice from '../../utils/calcDiscountPrice'
import Quantity from './Quantity/Quantity'

import style from '../../scss/components/CartItem.module.scss'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const CartItem: React.FC<ICartItem> = ({
	id,
	title,
	thumbnail,
	brand,
	price,
	discountPercentage,
	quantity = 1,
}) => {
	const dispatch: any = useDispatch()

	const onRemoveFromCart = (id: number) => {
		dispatch(removeFromCart(id))
	}
	return (
		<div className={style.cart__item}>
			<div className={style.img__wrapper}>
				<img src={thumbnail} alt='Product img' />
			</div>
			<div className={style.about}>
				<Link to={`/products/${id}`}>
					<h3 className={style.title}>{title}</h3>
				</Link>
				<div>{brand}</div>
			</div>
			<div className={style.wrapper}>
				{quantity && <Quantity id={id} quantity={quantity} />}
				<div className={style.price}>
					<div className={style.discountPrice}>
						{calcDiscountPrice(price, discountPercentage, quantity)} $
					</div>
					<div className={style.prevPrice}>{price * quantity} $</div>

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
