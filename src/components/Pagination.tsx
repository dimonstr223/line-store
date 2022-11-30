import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination: React.FC = ({}) => {
	const handlePageClick = (event: { selected: number }) => {}

	return (
		<>
			<ReactPaginate
				breakLabel='...'
				nextLabel='next >'
				//@ts-ignore
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={6}
				previousLabel='< previous'
				// renderOnZeroPageCount={null}
			/>
		</>
	)
}

export default Pagination
