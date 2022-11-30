import React from 'react'
import { useDispatch } from 'react-redux'

import useAppSelecror from '../hooks/useAppSelector'
import {
	decrementSkipProducts,
	getProducts,
	incrementSkipProducts,
	setCurrentPage,
	setSkipProducts,
} from '../redux/products/actions/productsAction'
import { countPages } from '../utils/countPages'
import { countToSkip } from '../utils/countToSkip'

import style from '../scss/components/Pagination.module.scss'

const Pagination: React.FC = ({}) => {
	const {
		limit,
		skipProducts,
		products,
		totalProducts,
		isLoading,
		currentPage,
	} = useAppSelecror(state => state.products)
	const dispatch: any = useDispatch()

	React.useEffect(() => {
		dispatch(getProducts(limit, skipProducts))
	}, [skipProducts])

	const onLoadNextClick = () => {
		dispatch(incrementSkipProducts())
		dispatch(setCurrentPage(currentPage + 1))
	}
	const onLoadPrevClick = () => {
		dispatch(decrementSkipProducts())
		dispatch(setCurrentPage(currentPage - 1))
	}

	const onClickPage = (item: number) => {
		dispatch(setSkipProducts(countToSkip(item, limit)))
		dispatch(setCurrentPage(item))
	}

	const pages = countPages(totalProducts, limit)

	return (
		<div className={style.pagination}>
			<button
				className={style.button}
				onClick={() => onLoadPrevClick()}
				disabled={skipProducts === 0 || isLoading}
			>
				Load prev
			</button>
			<ul className={style.pagesList}>
				{pages.map(item => (
					<li
						className={currentPage === item ? style.active : style.page}
						onClick={() => onClickPage(item)}
						key={item}
					>
						<div className={style.wrapper}>{item}</div>
					</li>
				))}
			</ul>
			<button
				className={style.button}
				onClick={onLoadNextClick}
				disabled={products.some(item => item.id === totalProducts || isLoading)}
			>
				Load next
			</button>
		</div>
	)
}

export default Pagination
