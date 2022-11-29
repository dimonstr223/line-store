import React from 'react'
import { useDispatch } from 'react-redux'
import useAppSelecror from '../../hooks/useAppSelector'
import { getCategories } from '../../redux/categories/actions/categoriesAction'

const Categories = () => {
	const { categories } = useAppSelecror(state => state.categories)
	const dispatch: any = useDispatch()

	React.useEffect(() => {
		dispatch(getCategories())
	}, [])

	return (
		<div className='overlay'>
			<div className='drawer'>
				<h3>Categories</h3>
				<ul className='categories'>
					{categories.map((item, index) => (
						<li key={item + index}>{item}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Categories
