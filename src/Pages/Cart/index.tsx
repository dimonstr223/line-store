import React from 'react'
import style from '../../scss/components/Cart.module.scss'

const Cart: React.FC = () => {
	return (
		<div className={style.cart}>
			<h1 className={style.cart__title}>Cart</h1>
			<div className={style.cart__items}>Items</div>
		</div>
	)
}

export default Cart
