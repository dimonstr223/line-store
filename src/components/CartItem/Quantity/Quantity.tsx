import React from 'react'

import style from '../../../scss/components/Quantity.module.scss'

interface QuantityProps {
	quantity: number
}

const Quantity: React.FC<QuantityProps> = ({ quantity }) => {
	return (
		<div className={style.quantity}>
			{' '}
			<button>-</button>
			<input className={style.input} type='number' value={quantity} />
			<button>+</button>
		</div>
	)
}

export default Quantity
