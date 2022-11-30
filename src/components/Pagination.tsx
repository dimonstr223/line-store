import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import useAppSelecror from '../hooks/useAppSelector'
import {
	decrementSkipProducts,
	getProducts,
	incrementSkipProducts,
	setSkipProducts,
} from '../redux/products/actions/productsAction'
import { countPages } from '../utils/countPages'
import { countToSkip } from '../utils/countToSkip'

const Pagination: React.FC = ({}) => {
	const { limit, skipProducts, products, totalProducts, isLoading } =
		useAppSelecror(state => state.products)
	const dispatch: any = useDispatch()

	React.useEffect(() => {
		dispatch(getProducts(limit, skipProducts))
	}, [skipProducts])

	const onLoadNextClick = () => {
		dispatch(incrementSkipProducts())
	}
	const onLoadPrevClick = () => {
		dispatch(decrementSkipProducts())
	}

	const onClickPage = (item: number) => {
		dispatch(setSkipProducts(countToSkip(item, limit)))
	}

	const pages = countPages(totalProducts, limit)

	return (
		<>
			<button
				onClick={() => onLoadPrevClick()}
				disabled={skipProducts === 0 || isLoading}
			>
				Load prev
			</button>
			<ul>
				{pages.map(item => (
					<li onClick={() => onClickPage(item)} key={item}>
						{item}
					</li>
				))}
			</ul>
			<button
				onClick={onLoadNextClick}
				disabled={products.some(item => item.id === totalProducts || isLoading)}
			>
				Load next
			</button>
		</>
	)
}

export default Pagination
