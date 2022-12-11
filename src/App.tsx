import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'

import Cart from './Pages/Cart/Cart'
import ProductPage from './Pages/ProductPage/ProductPage'
import Products from './Pages/Products/Products'

import './scss/App.scss'

const App: React.FC = () => {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/products' element={<Products />} />
					<Route path='products/:id' element={<ProductPage />} />
					<Route path='cart' element={<Cart />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
