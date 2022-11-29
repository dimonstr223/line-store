import React from 'react'
import { useDispatch } from 'react-redux'
import useAppSelecror from '../hooks/useAppSelector'
import { getProducts } from '../redux/products/actions/productsAction'

const Products: React.FC = () => {
	const { products } = useAppSelecror(state => state.products)
	const dispatch: any = useDispatch()

	React.useEffect(() => {
		dispatch(getProducts())
	}, [])

	console.log(products)
	return <div>Products</div>
}

export default Products
