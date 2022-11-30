import React from 'react'

import headerLogo from '../assets/images/header-logo.svg'
import cartIcon from '../assets/images/cart.svg'

import style from '../scss/components/Header.module.scss'

const Header: React.FC = () => {
	return (
		<header className={style.header}>
			<a href='/'>
				<div className={style.header__logo}>
					<img
						className={style.logo__img}
						src={headerLogo}
						alt='Logo'
						width={45}
					/>
					<h3 className={style.logo__text}>LineStore</h3>
				</div>
			</a>
			<div className='search'></div>
			<a href='/cart'>
				<div className={style.header__cart}>
					<div className={style.cart__wrapper}>
						<img src={cartIcon} alt='Cart' width={35} />
					</div>
				</div>
			</a>
		</header>
	)
}

export default Header
