import React from 'react'
import { useDispatch } from 'react-redux'

import useAppSelecror from '../../hooks/useAppSelector'
import {
	getCategories,
	setIsOpened,
} from '../../redux/categories/actions/categoriesAction'
import { setCategoryName } from '../../redux/products/actions/productsAction'
import closeIcon from '../../assets/images/close-icon.svg'

import style from '../../scss/components/Categories.module.scss'

const Categories: React.FC = () => {
	const { categories, isOpened } = useAppSelecror(state => state.categories)
	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch(getCategories())
	}, [])
	React.useEffect(() => {
		onAllProductsClick()
	}, [])

	const onCategoryClick = (item: string) => {
		dispatch(setCategoryName(item))
		dispatch(setIsOpened(false))
	}
	const onAllProductsClick = () => {
		dispatch(setCategoryName(''))
		dispatch(setIsOpened(false))
	}
	return (
		<div className={isOpened ? style.overlay : style.overlayClosed}>
			<div
				onMouseLeave={() => dispatch(setIsOpened(false))}
				onMouseEnter={() => dispatch(setIsOpened(true))}
				className={style.drawer}
			>
				<div className={style.top__wrapper}>
					<h3 className={style.title}>Categories</h3>
					<button
						onClick={() => dispatch(setIsOpened(false))}
						className={style.closeBtn}
					>
						<img src={closeIcon} alt='close' width={25} />
					</button>
				</div>
				<ul className={style.categories}>
					<li onClick={() => onAllProductsClick()} className={style.item}>
						<div className={style.wrapper}>All products</div>
					</li>
					{categories.map((item, index) => (
						<li
							onClick={() => onCategoryClick(item)}
							key={item + index}
							className={style.item}
						>
							<div className={style.wrapper}>
								{item[0].toUpperCase().concat(item.slice(1))}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Categories
