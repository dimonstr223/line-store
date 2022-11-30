import React from 'react'

import searchIcon from '../assets/images/search-icon.svg'
import closeIcon from '../assets/images/close-icon.svg'

const Search: React.FC = () => {
	return (
		<div>
			<img src={searchIcon} alt='Search icon' width={30} />
			<input type='text' placeholder='Search...' />
			<img src={closeIcon} alt='Close' width={30} />
		</div>
	)
}

export default Search
