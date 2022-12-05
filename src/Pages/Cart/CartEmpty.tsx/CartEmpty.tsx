import React from 'react'

import emptyCartImage from '../../../assets/images/empty-cart.svg'

import style from '../../../scss/components/CartEmpty.module.scss'

const CartEmpty: React.FC = () => {
	return (
		<div className={style.cartEmpty}>
			<div className={style.cartEmpty__inner}>
				<div className={style.img__wrapper}>
					<img
						className={style.cartEmpty__img}
						width={200}
						src={emptyCartImage}
						alt='Empty cart'
					/>
				</div>
				<h3 className={style.cartEmpty__title}>Cart is empty :(</h3>
				<button className={style.cartEmpty__button}>Back to products</button>
			</div>
		</div>
	)
}

export default CartEmpty
