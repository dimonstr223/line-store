import React from 'react'
import { Link } from 'react-router-dom'

import headerLogo from '../../assets/images/header-logo.svg'
import cartIcon from '../../assets/images/cart.svg'

import useAppSelecror from '../../hooks/useAppSelector'
import style from '../../scss/components/Header.module.scss'

const Header: React.FC = () => {
	const { totalQuantity } = useAppSelecror(state => state.cart)

	return (
		<header className={style.header}>
			<Link to='/products'>
				<div className={style.header__logo}>
					<img
						className={style.logo__img}
						src={headerLogo}
						alt='Logo'
						width={45}
					/>
					<h3 className={style.logo__text}>LineStore</h3>
				</div>
			</Link>
			<div className='search'></div>
			<Link to='/cart'>
				<div className={style.header__cart}>
					<div className={style.cart__wrapper}>
						<img src={cartIcon} alt='Cart' width={35} />
					</div>
					{totalQuantity > 0 && (
						<div className={style.totalQuantity}>{totalQuantity}</div>
					)}
				</div>
			</Link>
		</header>
	)
}

export default Header
