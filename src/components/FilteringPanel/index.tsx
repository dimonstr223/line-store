import React from 'react'
import { useDispatch } from 'react-redux'

import useAppSelecror from '../../hooks/useAppSelector'
import { setIsOpened } from '../../redux/categories/actions/categoriesAction'

import Search from './Search'

import style from '../../scss/components/FilteringPanel.module.scss'
import Sort from './Sort'

const FilteringPanel: React.FC = () => {
	const { categoryName, products, isLoading } = useAppSelecror(
		state => state.products
	)
	const dispatch: any = useDispatch()

	const onTitleClick = () => {
		dispatch(setIsOpened(true))
	}
	return (
		<div className={style.filteringPanel}>
			<button onClick={() => onTitleClick()} className={style.categoryBtn}>
				<h1>
					{categoryName
						? categoryName[0].toUpperCase().concat(categoryName.slice(1))
						: 'All products'}
				</h1>
			</button>
			<Search />
			<Sort products={products} isLoading={isLoading} />
		</div>
	)
}

export default FilteringPanel
