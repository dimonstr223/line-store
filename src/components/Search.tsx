import React from 'react'

import searchIcon from '../assets/images/search-icon.svg'
import closeIcon from '../assets/images/close-icon.svg'

import style from '../scss/components/Search.module.scss'
import useAppSelecror from '../hooks/useAppSelector'
import { useDispatch } from 'react-redux'
import { setSearchValue } from '../redux/filter/actions/filterActions'

const Search: React.FC = () => {
	const { searchValue } = useAppSelecror(state => state.filter)
	const dispatch = useDispatch()

	const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchValue(event.target.value))
	}
	return (
		<div className={style.search}>
			<img
				className={style.search__img}
				src={searchIcon}
				alt='Search icon'
				width={30}
			/>
			<input
				onChange={e => onInputChange(e)}
				value={searchValue}
				className={style.search__input}
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
