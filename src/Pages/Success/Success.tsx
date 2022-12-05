import React from 'react'

import successImage from '../../assets/images/success.svg'
import BackToProductsButton from '../../components/BackToProductsButton'

const Success = () => {
	return (
		<div className={style.success}>
			<div className={style.img__wrapper}>
				<img
					className={style.success__img}
					width={200}
					src={successImage}
					alt='Empty cart'
				/>
			</div>
			<h3 className={style.success__title}>Success :)</h3>
			<p className={style.success__text}>Delivery details sent to your email</p>
			<BackToProductsButton />
		</div>
	)
}

export default Success
