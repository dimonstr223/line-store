import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import useAppSelecror from '../hooks/useAppSelector'
import {
	getProducts,
	setSkipProducts,
} from '../redux/products/actions/productsAction'

const Pagination: React.FC = ({}) => {
	const { limit, skipProducts } = useAppSelecror(state => state.products)
	const dispatch: any = useDispatch()

	const onLoadPrevClick = () => {
		dispatch(setSkipProducts(skipProducts - limit))
		dispatch(getProducts(limit, skipProducts))
	}

	const onLoadNextClick = () => {
		dispatch(setSkipProducts(skipProducts + limit))
		console.log(skipProducts)
		dispatch(getProducts(limit, skipProducts))
	}

	return (
		<>
			<button onClick={() => onLoadPrevClick()} disabled={skipProducts === 0}>
				Load prev
			</button>
			<button onClick={() => onLoadNextClick()}>Load next</button>
		</>
	)
}

export default Pagination
