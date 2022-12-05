import React from 'react'

import style from '../../../scss/components/Quantity.module.scss'

interface QuantityProps {
	quantity: number
}

const Quantity: React.FC<QuantityProps> = ({ quantity }) => {
	return <div className={style.quantity}>{quantity}</div>
}

export default Quantity
