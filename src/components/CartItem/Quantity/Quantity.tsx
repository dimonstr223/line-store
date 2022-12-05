import React from 'react'

import style from '../../../scss/components/Quantity.module.scss'

interface QuantityProps {
	id: number
	quantity: number
}

const Quantity: React.FC<QuantityProps> = ({ id, quantity }) => {
	return (
		<div className={style.quantity}>
			<button className={style.decrBtn}>-</button>
			<input className={style.input} type='number' value={quantity} />
			<button className={style.incrBtn}>+</button>
		</div>
	)
}

export default Quantity
