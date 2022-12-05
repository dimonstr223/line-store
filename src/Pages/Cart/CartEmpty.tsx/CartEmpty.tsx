import React from 'react'

import emptyCartImage from '../../../assets/images/empty-cart.svg'

// import style from '../../scss/components/Cart.module.scss'

const CartEmpty: React.FC = () => {
	return (
		<div>
			<div>
				<img src={emptyCartImage} alt='Empty cart' />
			</div>
			<h3>Cart is empty</h3>
			<button>Back to products</button>
		</div>
	)
}

export default CartEmpty
