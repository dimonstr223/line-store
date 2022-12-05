import React from 'react'
import { Link } from 'react-router-dom'

import CartItem from '../../components/CartItem/CartItem'
import TotalPrice from '../../components/TotalPrice'
import useAppSelecror from '../../hooks/useAppSelector'

import style from '../../scss/components/Cart.module.scss'

const Cart: React.FC = () => {
	const { cartItems } = useAppSelecror(state => state.cart)
	return (
		<div className={style.cart}>
			<div className={style.cart__top}>
				<h1 className={style.cart__title}>Cart</h1>
				<Link to='/'>
					<button className={style.backToProducts__button}>
						Back to products
					</button>
				</Link>
			</div>
			<div className={style.items__wrapper}>
				<div className={style.cart__items}>
					{cartItems.map(item => (
						<CartItem key={item.id} {...item} />
					))}
				</div>
				<TotalPrice />
			</div>
		</div>
	)
}

export default Cart
