import React from 'react'

import style from '../../../scss/components/Sort.module.scss'

const sortingParams = [{ title: 'rating' }, { title: 'price' }]

const Sort: React.FC = () => {
	return (
		<div className={style.sort}>
			<button className={style.openPopupBtn}>
				<b>Sort by :</b> rating
			</button>
			<ul className={style.popup}>
				{sortingParams.map(item => (
					<li className={style.item}>
						<button>{item.title}</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Sort
