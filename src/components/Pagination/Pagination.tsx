import React from 'react'
import { useDispatch } from 'react-redux'
import ReactPaginate from 'react-paginate'

import useAppSelecror from '../../hooks/useAppSelector'
import {
	getProducts,
	setCurrentPage,
	setSkipProducts,
} from '../../redux/products/actions/productsAction'
import { calcPages } from '../../utils/calcPages'
import { calcCountToSkip } from '../../utils/calcCountToSkip'
import { setSortingParam } from '../../redux/filter/actions/filterActions'

import style from '../../scss/components/Pagination.module.scss'

const Pagination: React.FC = () => {
	const { limit, skipProducts, totalProducts } = useAppSelecror(
		state => state.products
	)
	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch(getProducts(limit, skipProducts))
		dispatch(setSortingParam('order'))
	}, [skipProducts])

	const handlePageClick = (event: any) => {
		dispatch(setCurrentPage(event.selected + 1))
		dispatch(setSkipProducts(calcCountToSkip(event.selected + 1, limit)))
	}

	const pages = calcPages(totalProducts, limit)

	return (
		<ReactPaginate
			nextLabel='>'
			onPageChange={handlePageClick}
			pageRangeDisplayed={2}
			marginPagesDisplayed={1}
			pageCount={pages.length}
			previousLabel='<'
			containerClassName={style.pagination}
			pageClassName={style.page}
			activeClassName={style.active}
			pageLinkClassName={style.page_link}
			activeLinkClassName={style.active_link}
			previousLinkClassName={style.button}
			nextLinkClassName={style.button}
			breakLabel=''
		/>
	)
}

// const Pagination: React.FC = ({}) => {
// 	const {
// 		limit,
// 		skipProducts,
// 		products,
// 		totalProducts,
// 		isLoading,
// 		currentPage,
// 	} = useAppSelecror(state => state.products)
// 	const dispatch: any = useDispatch()

// 	React.useEffect(() => {
// 		dispatch(getProducts(limit, skipProducts))
// 		dispatch(setSortingParam('order'))
// 	}, [skipProducts])

// 	const onLoadNextClick = () => {
// 		dispatch(incrementSkipProducts())
// 		dispatch(setCurrentPage(currentPage + 1))
// 	}
// 	const onLoadPrevClick = () => {
// 		dispatch(decrementSkipProducts())
// 		dispatch(setCurrentPage(currentPage - 1))
// 	}

// 	const onClickPage = (item: number) => {
// 		dispatch(setSkipProducts(calcCountToSkip(item, limit)))
// 		dispatch(setCurrentPage(item))
// 	}

// 	const pages = calcPages(totalProducts, limit)

// 	return (
// 		<div className={style.pagination}>
// 			<button
// 				className={style.button}
// 				onClick={() => onLoadPrevClick()}
// 				disabled={skipProducts === 0 || products.length < limit || isLoading}
// 			>
// 				Load prev
// 			</button>
// 			<ul className={style.pagesList}>
// 				{pages.map(item => (
// 					<li
// 						className={currentPage === item ? style.active : style.page}
// 						onClick={() => onClickPage(item)}
// 						key={item}
// 					>
// 						<div className={style.wrapper}>{item}</div>
// 					</li>
// 				))}
// 			</ul>
// 			<button
// 				className={style.button}
// 				onClick={onLoadNextClick}
// 				disabled={
// 					products.some(item => item.id === totalProducts) ||
// 					products.length < limit ||
// 					isLoading
// 				}
// 			>
// 				Load next
// 			</button>
// 		</div>
// 	)
// }

export default Pagination
