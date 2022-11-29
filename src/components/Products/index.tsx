import React from 'react'
import { useDispatch } from 'react-redux'
import useAppSelecror from '../../hooks/useAppSelector'
import { getProducts } from '../../redux/products/actions/productsAction'
import ProductsItem from './ProductsItem'

const Products: React.FC = () => {
	const { products } = useAppSelecror(state => state.products)
	const dispatch: any = useDispatch()

	React.useEffect(() => {
		dispatch(getProducts())
	}, [])

	console.log(products)
	return (
		<div>
			{products.map(item => (
				<ProductsItem key={item.id} {...item} />
			))}
		</div>
	)
}

export default Products
