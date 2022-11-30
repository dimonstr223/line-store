import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import useAppSelecror from '../hooks/useAppSelector'
import {
	decrementSkipProducts,
	getProducts,
	incrementSkipProducts,
} from '../redux/products/actions/productsAction'

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

	return (
		<>
			<button
				onClick={() => onLoadPrevClick()}
				disabled={skipProducts === 0 || isLoading}
			>
				Load prev
			</button>
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
