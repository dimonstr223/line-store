import React from 'react'
import { useDispatch } from 'react-redux'

import useAppSelecror from '../../hooks/useAppSelector'
import CartItem from '../../components/CartItem/CartItem'
import BackToProductsButton from '../../components/BackToProductsButton/BackToProductsButton'
import TotalPrice from '../../components/TotalPrice/TotalPrice'
import CartEmpty from './CartEmpty.tsx/CartEmpty'
import { setTotalInfo } from '../../redux/cart/actions/cartActions'

import style from '../../scss/components/Cart.module.scss'

const Cart: React.FC = () => {
	const { cartItems } = useAppSelecror(state => state.cart)
	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch(setTotalInfo())
	}, [cartItems])
	return (
		<div className={style.cart}>
			{cartItems.length > 0 ? (
				<>
					<div className={style.cart__top}>
						<h1 className={style.cart__title}>Cart</h1>
						<BackToProductsButton />
					</div>
					<div className={style.items__wrapper}>
						<div className={style.cart__items}>
							{cartItems.map(item => (
								<CartItem key={item.id} {...item} />
							))}
						</div>
						<TotalPrice />
					</div>
				</>
			) : (
				<CartEmpty />
			)}
		</div>
	)
}

export default Cart
