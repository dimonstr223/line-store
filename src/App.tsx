import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'

import Cart from './Pages/Cart/Cart'
import NotFound from './Pages/NotFound/NotFound'
import ProductPage from './Pages/ProductPage/ProductPage'
import Products from './Pages/Products/Products'
import Success from './Pages/Success/Success'

import './scss/App.scss'

const App: React.FC = () => {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Products />} />
					<Route path='products/:id' element={<ProductPage />} />
					<Route path='cart' element={<Cart />} />
					<Route path='success' element={<Success />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
