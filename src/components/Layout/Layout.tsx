import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Layout: React.FC = () => {
	return (
		<>
			<div className='header__wrapper'>
				<div className='container'>
					<Header />
				</div>
			</div>
			<div className='content__wrapper'>
				<div className='container'>
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default Layout
