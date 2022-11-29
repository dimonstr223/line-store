import React from 'react'
import { useDispatch } from 'react-redux'

import useAppSelecror from '../../hooks/useAppSelector'
import {
	getProducts,
	getProductsOfCategory,
} from '../../redux/products/actions/productsAction'
import ProductsItem from './ProductsItem'

import style from '../../scss/components/Products.module.scss'
import { setIsOpened } from '../../redux/categories/actions/categoriesAction'
import Categories from '../Categories'

const Products: React.FC = () => {
	const { products, categoryName } = useAppSelecror(state => state.products)
	const { isOpened } = useAppSelecror(state => state.categories)
	const dispatch: any = useDispatch()

	React.useEffect(() => {
		dispatch(getProducts())
	}, [])

	React.useEffect(() => {
		dispatch(getProductsOfCategory(categoryName))
	}, [categoryName])

	const onCategoryClick = () => {
		dispatch(setIsOpened(true))
	}

	return (
		<>
			{isOpened && <Categories />}
			<button onClick={() => onCategoryClick()}>
				<h1>{categoryName[0].toUpperCase().concat(categoryName.slice(1))}</h1>
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
