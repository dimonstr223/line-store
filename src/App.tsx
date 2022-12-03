import React from 'react'

import Header from './components/Header'
import Products from './Pages/Products'

import './scss/App.scss'

const App: React.FC = () => {
	return (
		<div className='app'>
			<div className='header__wrapper'>
				<div className='container'>
					<Header />
				</div>
			</div>
			<div className='products__wrapper'>
				<div className='container'>
					<Products />
				</div>
			</div>
		</div>
	)
}

export default App
