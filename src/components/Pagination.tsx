import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import useAppSelecror from '../hooks/useAppSelector'
import { getProducts, setSkipProducts } from '../redux/products/actions/productsAction'

const Pagination: React.FC = ({}) => {
	const {limit,skipProducts} = useAppSelecror(state => state.products)
	const dispatch = useDispatch()

const onLoadMoreClick () => {
	dispatch(setSkipProducts(skipProducts + limit))
	dispatch(getProducts(limit, skipProducts))
}

	return (
		<>
			<button onClick={() => onLoadMoreClick()}>Load more</button>
		</>
	)
}

export default Pagination
