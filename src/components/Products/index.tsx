import React from 'react'
import { useDispatch } from 'react-redux'

import useAppSelecror from '../../hooks/useAppSelector'
import {
	getProducts,
	getProductsOfCategory,
} from '../../redux/products/actions/productsAction'

import ProductsItem from './ProductsItem'
import Categories from '../Categories'
import Pagination from '../Pagination'
import FilteringPanel from '../FilteringPanel'

import style from '../../scss/components/Products.module.scss'

const Products: React.FC = React.memo(() => {
	const { products, categoryName, limit, skipProducts } = useAppSelecror(
		state => state.products
	)
	const dispatch: any = useDispatch()

	React.useEffect(() => {
		if (categoryName) {
			dispatch(getProductsOfCategory(categoryName))
		} else {
			dispatch(getProducts(limit, skipProducts))
		}
	}, [categoryName])

	return (
		<>
			{/* {isOpened && <Categories />} */}
			<Categories />
			<FilteringPanel />
			<div className={style.products}>
				{products.map(item => (
					<ProductsItem key={item.id} {...item} />
				))}
			</div>
			{/* {!categoryName && <Pagination />} */}
			<Pagination />
		</>
	)
})

export default Products
