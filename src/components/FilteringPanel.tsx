import React from 'react'
import { useDispatch } from 'react-redux'

import useAppSelecror from '../hooks/useAppSelector'
import { setIsOpened } from '../redux/categories/actions/categoriesAction'

import Search from './Search'

import style from '../scss/components/SortingPanel.module.scss'

const sortingParams = [{ title: 'rating' }, { title: 'price' }]

const FilteringPanel: React.FC = () => {
	const { categoryName } = useAppSelecror(state => state.products)
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
			<div className={style.sort}>
				<b>Sort by :</b> rating
			</div>
		</div>
	)
}

export default FilteringPanel
