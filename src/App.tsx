import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Cart from './Pages/Cart/Cart'
import ProductPage from './Pages/ProductPage/ProductPage'
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
					<Routes>
						{/* <Route path='/' element={<Products />} /> */}
						<Route path='/' element={<ProductPage />} />
						<Route path='/cart' element={<Cart />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App
