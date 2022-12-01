import React from 'react'
import { useDispatch } from 'react-redux'
import useAppSelecror from '../../../hooks/useAppSelector'
import {
	setIsPopupOpened,
	setSortingParam,
} from '../../../redux/filter/actions/filterActions'
import { SortParam } from '../../../redux/filter/types/filterTypes'
import {
	setProducts,
	sortProducts,
} from '../../../redux/products/actions/productsAction'
import { Product } from '../../../redux/products/types/productsTypes'

import style from '../../../scss/components/Sort.module.scss'

const sortingParams: SortParam[] = ['order', 'rating', 'price']

interface SortProps {
	products: Product[]
}

const Sort: React.FC<SortProps> = ({ products }) => {
	const { isPopupOpened, sortingParam } = useAppSelecror(state => state.filter)
	const dispatch: any = useDispatch()

	const onSortClick = (item: SortParam) => {
		dispatch(setSortingParam(item))
		dispatch(setIsPopupOpened(false))
		dispatch(sortProducts())
	}

	return (
		<div
			onMouseEnter={() => dispatch(setIsPopupOpened(true))}
			onMouseLeave={() => dispatch(setIsPopupOpened(false))}
			className={style.sort}
		>
			<button className={style.openPopupBtn}>
				<b>Sort by :</b> {sortingParam}
			</button>
			{isPopupOpened && (
				<ul className={style.popup}>
					{sortingParams
						.filter(item => item !== sortingParam)
						.map(item => (
							<li key={item} className={style.item}>
								<button onClick={() => onSortClick(item)}>{item}</button>
							</li>
						))}
				</ul>
			)}
		</div>
	)
}

export default Sort
