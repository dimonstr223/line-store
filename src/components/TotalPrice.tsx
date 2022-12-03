import React from 'react'
import { useDispatch } from 'react-redux'
import useAppSelecror from '../hooks/useAppSelector'
import {
	setTotalDiscountPrice,
	setTotalPrice,
} from '../redux/cart/actions/cartActions'

import style from '../scss/components/TotalPrice.module.scss'

const TotalPrice: React.FC = () => {
	const { cartItems, totalPrice, totalDiscountPrice } = useAppSelecror(
		state => state.cart
	)
	const dispatch: any = useDispatch()

	React.useEffect(() => {
		dispatch(setTotalPrice())
		dispatch(setTotalDiscountPrice())
	}, [cartItems])
	return (
		<div className={style.totalPrice}>
			<ul className={style.totalPrice__list}>
				<li className={style.item}>
					<h5 className={style.title}>Total:</h5>
					<div className={style.total}>{totalDiscountPrice} $</div>
				</li>
				<li className={style.item}>
					<h5>Qty: 1</h5>
					<div>{totalPrice}$</div>
				</li>
				<li className={style.item}>
					<h5>Discount:</h5>
					<div>1000$</div>
				</li>
			</ul>
			<button className={style.order__button}> Place an order</button>
		</div>
	)
}

export default TotalPrice
