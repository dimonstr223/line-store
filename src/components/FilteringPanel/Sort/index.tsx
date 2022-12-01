import React from 'react'
import { useDispatch } from 'react-redux'
import useAppSelecror from '../../../hooks/useAppSelector'
import { setIsPopupOpened } from '../../../redux/filter/actions/filterActions'

import style from '../../../scss/components/Sort.module.scss'

const sortingParams = [{ title: 'rating' }, { title: 'price' }]

const Sort: React.FC = () => {
	const { isPopupOpened } = useAppSelecror(state => state.filter)
	const dispatch: any = useDispatch()

	return (
		<div
			onMouseEnter={() => dispatch(setIsPopupOpened(true))}
			onMouseLeave={() => dispatch(setIsPopupOpened(false))}
			className={style.sort}
		>
			<button className={style.openPopupBtn}>
				<b>Sort by :</b> rating
			</button>
			{isPopupOpened && (
				<ul className={style.popup}>
					{sortingParams.map(item => (
						<li className={style.item}>
							<button>{item.title}</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Sort
