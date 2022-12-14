import React from 'react'
import { useDispatch } from 'react-redux'

import useAppSelecror from '../../hooks/useAppSelector'
import { setIsOpened } from '../../redux/categories/actions/categoriesAction'

import Search from './Search/Search'
import Sort from './Sort/Sort'

import style from '../../scss/components/FilteringPanel.module.scss'

const FilteringPanel: React.FC = () => {
	const { categoryName, products, isLoading } = useAppSelecror(
		state => state.products
	)
	const dispatch = useDispatch()

	const onTitleHandler = () => {
		dispatch(setIsOpened(true))
	}
	return (
		<div className={style.filteringPanel}>
			<button
				onMouseEnter={() => onTitleHandler()}
				className={style.categoryBtn}
			>
				<h1 className={style.categoryTitle}>
					{categoryName
						? categoryName[0].toUpperCase().concat(categoryName.slice(1))
						: 'Categories'}
				</h1>
			</button>
			<div className={style.wrapper}>
				<Search />
				<Sort products={products} isLoading={isLoading} />
			</div>
		</div>
	)
}

export default FilteringPanel
