import React from 'react'

import headerLogo from '../assets/images/header-logo.svg'
import cartIcon from '../assets/images/cart.svg'

import style from '../scss/components/Header.module.scss'

const Header: React.FC = () => {
	return (
		<header className={style.header}>
			<div className={style.header__logo}>
				<img
					className={style.logo__img}
					src={headerLogo}
					alt='Logo'
					width={45}
				/>
				<h3 className={style.logo__text}>LineStore</h3>
			</div>
			<div className={style.header__cart}>
				<img src={cartIcon} alt='Cart' width={30} />
			</div>
		</header>
	)
}

export default Header
