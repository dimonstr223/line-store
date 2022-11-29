import React from 'react'
import { useDispatch } from 'react-redux'
import useAppSelecror from '../../hooks/useAppSelector'
import { getCategories } from '../../redux/categories/actions/categoriesAction'

import style from '../../scss/components/Categories.module.scss'

const Categories = () => {
	const { categories } = useAppSelecror(state => state.categories)
	const dispatch: any = useDispatch()

	React.useEffect(() => {
		dispatch(getCategories())
	}, [])

	return (
		<div className={style.overlay}>
			<div className={style.drawer}>
				<h3 className={style.title}>Categories</h3>
				<ul className={style.categories}>
					{categories.map((item, index) => (
						<li key={item + index} className={style.item}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Categories
