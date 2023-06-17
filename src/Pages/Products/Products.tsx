import React, { useEffect, FC } from 'react'
import { useDispatch } from "react-redux"
import useAppDispatch from '../../hooks/useAppDispatch'

import useAppSelecror from '../../hooks/useAppSelector'
import {
	getProducts,
	getProductsOfCategory,
} from '../../redux/products/actions/productsAction'
import type {} from 'redux-thunk/extend-redux'

import ProductsItem from '../../components/ProductsItem/ProductsItem'
import Categories from '../../components/Categories/Categories'
import Pagination from '../../components/Pagination/Pagination'
import FilteringPanel from '../../components/FilteringPanel/FilteringPanel'

import style from '../../scss/components/Products.module.scss'
import { fetchProducts } from "../../redux-tk/products/thunk/productThunk"

const Products: FC = React.memo(() => {
	const { products, categoryName, limit, skipProducts } = useAppSelecror(
		state => state.products
	)
	const dispatch = useDispatch()

	useEffect(() => {
		if (categoryName) {
			dispatch(getProductsOfCategory(categoryName))
			dispatch(getProductsOfCategory(categoryName))
		} else {
			dispatch(fetchProducts({ limit, skipProducts }))
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
