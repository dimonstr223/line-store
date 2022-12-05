import React from 'react'
import { Link } from 'react-router-dom'

import emptyCartImage from '../../../assets/images/empty-cart.svg'
import BackToProductsButton from '../../../components/BackToProductsButton'

import style from '../../../scss/components/CartEmpty.module.scss'

const CartEmpty: React.FC = () => {
	return (
		<div className={style.cartEmpty}>
			<div className={style.img__wrapper}>
				<img
					className={style.cartEmpty__img}
					width={200}
					src={emptyCartImage}
					alt='Empty cart'
				/>
			</div>
			<h3 className={style.cartEmpty__title}>Cart is empty :(</h3>
			<BackToProductsButton />
		</div>
	)
}

export default CartEmpty
