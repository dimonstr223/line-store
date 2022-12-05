import React from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { incrementQuantity } from '../../../redux/cart/actions/cartActions'

import style from '../../../scss/components/Quantity.module.scss'

interface QuantityProps {
	id: number
	quantity: number
}

const Quantity: React.FC<QuantityProps> = ({ id, quantity }) => {
	const dispatch = useAppDispatch()

	const onIncrement = (id: number) => {
		dispatch(incrementQuantity(id))
	}
	return (
		<div className={style.quantity}>
			<button onClick={() => onIncrement(id)} className={style.decrBtn}>
				-
			</button>
			<input className={style.input} type='number' value={quantity} />
			<button className={style.incrBtn}>+</button>
		</div>
	)
}

export default Quantity
