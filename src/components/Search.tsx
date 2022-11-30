import React from 'react'

import searchIcon from '../assets/images/search-icon.svg'
import closeIcon from '../assets/images/close-icon.svg'

import style from '../scss/components/Search.module.scss'

const Search: React.FC = () => {
	return (
		<div className={style.search}>
			<img
				className={style.search__img}
				src={searchIcon}
				alt='Search icon'
				width={30}
			/>
			<input
				className={style.search__input}
				type='text'
				placeholder='Search...'
			/>
			<div className={style.wrapper}>
				<img
					className={style.close__img}
					src={closeIcon}
					alt='Close'
					width={20}
				/>
			</div>
		</div>
	)
}

export default Search
