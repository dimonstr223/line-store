import React from 'react'

import notFound from '../../assets/images/notFound.svg'
import BackToProductsButton from '../../components/BackToProductsButton/BackToProductsButton'

import style from '../../scss/components/NotFound.module.scss'

const NotFound: React.FC = () => {
	return (
		<div className={style.notFound}>
			<div className={style.img__wrapper}>
				<img
					className={style.notFound__img}
					width={140}
					src={notFound}
					alt='Empty cart'
				/>
			</div>
			<h3 className={style.notFound__title}>Not found :(</h3>
			<BackToProductsButton />
		</div>
	)
}

export default NotFound
