import React from 'react'
import { useDispatch } from 'react-redux'
import { getCategories } from '../../redux/categories/actions/categoriesAction'

const Categories = () => {
	const dispatch: any = useDispatch()
	React.useEffect(() => {
		dispatch(getCategories())
	}, [])
	return (
		<div className='overlay'>
			<div className='drawer'>
				<h3>Categories</h3>
				<ul className='categories'>
					<li>Phones</li>
				</ul>
			</div>
		</div>
	)
}

export default Categories
