import React from 'react'
import { useDispatch } from 'react-redux'

import useAppSelecror from '../../hooks/useAppSelector'
import { getProducts } from '../../redux/products/actions/productsAction'
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

	const onCategoryClick = () => {
		dispatch(setIsOpened(true))
	}

	return (
		<>
			{isOpened && <Categories />}
			<button onClick={() => onCategoryClick()}>
				<h1>All products</h1>
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
