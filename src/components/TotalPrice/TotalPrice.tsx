import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

import useAppSelecror from '../../hooks/useAppSelector'
import { clearCart } from '../../redux/cart/actions/cartActions'

import style from '../../scss/components/TotalPrice.module.scss'

const TotalPrice: React.FC = () => {
	const { cartItems, totalPrice, totalDiscountPrice, discount, totalQuantity } =
		useAppSelecror(state => state.cart)
	const dispatch = useDispatch()

	const onClearCart = () => {
		if (window.confirm('Clear cart?')) dispatch(clearCart())
	}

	return (
		<div className={style.totalPrice}>
			<ul className={style.totalPrice__list}>
				<li className={style.item}>
					<h5 className={style.title}>Total:</h5>
					<div className={style.total}>{totalDiscountPrice} $</div>
				</li>
				<li className={style.item}>
					<h5>Qty: {totalQuantity}</h5>
					<div>{totalPrice} $</div>
				</li>
				<li className={style.item}>
					<h5>Discount:</h5>
					<div>{discount} $</div>
				</li>
			</ul>
			<div className={style.buttons}>
				<button className={style.order__button}> Place an order</button>
				<button
					onClick={onClearCart}
					disabled={cartItems.length === 0}
					className={style.clearCart__button}
				>
					Clear
				</button>
			</div>
		</div>
	)
}

export default TotalPrice
