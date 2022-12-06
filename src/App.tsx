import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Header from './components/Header'
import useAppSelecror from './hooks/useAppSelector'
import Cart from './Pages/Cart/Cart'
import ProductPage from './Pages/ProductPage/ProductPage'
import Products from './Pages/Products'

import './scss/App.scss'

const App: React.FC = () => {
	const { products } = useAppSelecror(state => state.products)

	return (
		<div className='app'>
			{products.length > 0 && <Navigate to='/products' />}
			<div className='header__wrapper'>
				<div className='container'>
					<Header />
				</div>
			</div>
			<div className='products__wrapper'>
				<div className='container'>
					<Routes>
						<Route path='/products' element={<Products />} />
						<Route path='/products/:id' element={<ProductPage />} />
						<Route path='/cart' element={<Cart />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App
