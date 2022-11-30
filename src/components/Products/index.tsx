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
import style from '../../scss/components/Products.module.scss'

const Products: React.FC = () => {
	const { products, categoryName } = useAppSelecror(state => state.products)
	const { isOpened } = useAppSelecror(state => state.categories)
	const dispatch: any = useDispatch()

	React.useEffect(() => {
		if (categoryName) {
			dispatch(getProductsOfCategory(categoryName))
		} else {
			dispatch(getProducts())
		}
	}, [categoryName])

	// React.useEffect(() => {}, [categoryName])

	const onTitleClick = () => {
		dispatch(setIsOpened(true))
	}

	return (
		<>
			{/* {isOpened && <Categories />} */}
			<Categories />
			<button onClick={() => onTitleClick()} className={style.categoryBtn}>
				<h1>
					{categoryName
						? categoryName[0].toUpperCase().concat(categoryName.slice(1))
						: 'All products'}
				</h1>
			</button>
			<div className={style.products}>
				{products.map(item => (
					<ProductsItem key={item.id} {...item} />
				))}
			</div>
		</>
	)
}

export default Products
