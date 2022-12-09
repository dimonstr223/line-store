import React from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import {
	decreaseQuantity,
	increaseQuantity,
} from '../../../redux/cart/actions/cartActions'

import style from '../../../scss/components/Quantity.module.scss'

interface QuantityProps {
	id: number
	quantity: number
}

const Quantity: React.FC<QuantityProps> = ({ id, quantity }) => {
	const dispatch = useAppDispatch()

	const onIncrease = (id: number) => {
		dispatch(increaseQuantity(id))
	}
	const onDecrease = (id: number) => {
		dispatch(decreaseQuantity(id))
	}
	return (
		<div className={style.quantity}>
			<button
				disabled={quantity <= 1}
				onClick={() => onDecrease(id)}
				className={style.decrBtn}
			>
				-
			</button>
			<input className={style.input} type='number' value={quantity} readOnly />
			<button
				disabled={quantity >= 10}
				onClick={() => onIncrease(id)}
				className={style.incrBtn}
			>
				+
			</button>
		</div>
	)
}

export default Quantity
