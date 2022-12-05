import React from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { increaseQuantity } from '../../../redux/cart/actions/cartActions'

import style from '../../../scss/components/Quantity.module.scss'

interface QuantityProps {
	id: number
	quantity: number
}

const Quantity: React.FC<QuantityProps> = ({ id, quantity }) => {
	const dispatch = useAppDispatch()

	const onIncrement = (id: number) => {
		dispatch(increaseQuantity(id))
	}
	return (
		<div className={style.quantity}>
			<button className={style.decrBtn}>-</button>
			<input className={style.input} type='number' value={quantity} />
			<button onClick={() => onIncrement(id)} className={style.incrBtn}>
				+
			</button>
		</div>
	)
}

export default Quantity
