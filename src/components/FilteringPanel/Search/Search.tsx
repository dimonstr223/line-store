import React from 'react'

import searchIcon from '../../../assets/images/search-icon.svg'
import closeIcon from '../../../assets/images/close-icon.svg'

import useAppSelecror from '../../../hooks/useAppSelector'
import { useDispatch } from 'react-redux'
import {
	getProudctsFromSearch,
	setSearchValue,
} from '../../../redux/filter/actions/filterActions'
import { getProducts } from '../../../redux/products/actions/productsAction'

import style from '../../../scss/components/Search.module.scss'

const Search: React.FC = () => {
	const { searchValue } = useAppSelecror(state => state.filter)
	const { limit, skipProducts } = useAppSelecror(state => state.products)
	const dispatch = useDispatch()

	React.useEffect(() => {
		!searchValue && dispatch(getProducts(limit, skipProducts))
	}, [searchValue])

	const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchValue(event.target.value))
	}

	const onSearchClick = () => {
		searchValue
			? dispatch(getProudctsFromSearch(searchValue))
			: dispatch(getProducts(limit, skipProducts))
	}
	return (
		<div className={style.search}>
			<div className={style.search__container}>
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
				{searchValue && (
					<div
						onClick={() => dispatch(setSearchValue(''))}
						className={style.wrapper}
					>
						<img
							className={style.close__img}
							src={closeIcon}
							alt='Close'
							width={20}
						/>
					</div>
				)}
			</div>
			<button
				onClick={onSearchClick}
				disabled={!searchValue}
				className={style.searchBtn}
			>
				Search
			</button>
		</div>
	)
}

export default Search
