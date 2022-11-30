import React from 'react'
import { useDispatch } from 'react-redux'

import useAppSelecror from '../../hooks/useAppSelector'
import {
	getProducts,
	getProductsOfCategory,
} from '../../redux/products/actions/productsAction'
import { setIsOpened } from '../../redux/categories/actions/categoriesAction'

import ProductsItem from './ProductsItem'
import Categories from '../Categories'
import Pagination from '../Pagination'
import Search from '../Search'

import style from '../../scss/components/Products.module.scss'

const Products: React.FC = () => {
	const { products, categoryName, limit, skipProducts, totalProducts } =
		useAppSelecror(state => state.products)
	const { categories } = useAppSelecror(state => state.categories)
	const dispatch: any = useDispatch()

	React.useEffect(() => {
		if (categoryName) {
			dispatch(getProductsOfCategory(categoryName))
		} else {
			dispatch(getProducts(limit, skipProducts))
		}
	}, [categoryName])

	const onTitleClick = () => {
		dispatch(setIsOpened(true))
	}

	return (
		<>
			{/* {isOpened && <Categories />} */}
			<Categories />
			<div className={style.sortingPanel}>
				<button onClick={() => onTitleClick()} className={style.categoryBtn}>
					<h1>
						{categoryName
							? categoryName[0].toUpperCase().concat(categoryName.slice(1))
							: 'All products'}
					</h1>
				</button>
				<Search />
				<div className={style.sort}>
					<b>Sort by :</b> rating
				</div>
			</div>
			<div className={style.products}>
				{products.map(item => (
					<ProductsItem key={item.id} {...item} />
				))}
			</div>
			{!categoryName && <Pagination />}
		</>
	)
}

export default Products
