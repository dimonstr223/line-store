import React from 'react'
import { Link } from 'react-router-dom'

import style from '../scss/components/BackToProductsButton.module.scss'

const BackToProductsButton: React.FC = () => {
	return (
		<>
			<Link to='/products'>
				<button className={style.cartEmpty__button}>Back to products</button>
			</Link>
		</>
	)
}

export default BackToProductsButton
