import React from 'react'
import { useDispatch } from 'react-redux'
import useAppSelecror from '../../../hooks/useAppSelector'
import {
	setIsPopupOpened,
	setSortParam,
} from '../../../redux/filter/actions/filterActions'
import { sortParam } from '../../../redux/filter/types/filterTypes'
import { Product } from '../../../redux/products/types/productsTypes'

import style from '../../../scss/components/Sort.module.scss'

const sortingParams: sortParam[] = ['rating', 'price']

interface SortProps {
	products: Product[]
}

const Sort: React.FC<SortProps> = ({ products }) => {
	const { isPopupOpened, sortParam } = useAppSelecror(state => state.filter)
	const dispatch: any = useDispatch()

	const sortProducts = (products: Product[]) =>
		products.sort((a, b) => a.rating - b.rating)

	const onSortClick = (item: sortParam) => {
		dispatch(setSortParam(item))
		dispatch(setIsPopupOpened(false))
	}

	return (
		<div
			onMouseEnter={() => dispatch(setIsPopupOpened(true))}
			onMouseLeave={() => dispatch(setIsPopupOpened(false))}
			className={style.sort}
		>
			<button className={style.openPopupBtn}>
				<b>Sort by :</b> {sortParam}
			</button>
			{isPopupOpened && (
				<ul className={style.popup}>
					{sortingParams.map(item => (
						<li className={style.item}>
							<button onClick={() => onSortClick(item)}>{item}</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Sort
