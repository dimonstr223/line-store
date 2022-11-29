import React from 'react'
import { Product } from '../../../redux/products/types/productsTypes'

import addToCartIcon from '../../../assets/images/add-to-cart-icon.svg'

const ProductsItem: React.FC<Product> = ({
	thumbnail,
	title,
	brand,
	price,
}) => {
	return (
		<div>
			<div>
				<img src={thumbnail} alt='Product' />
			</div>
			<h3>{title}</h3>
			<div>{brand}</div>
			<div>
				<div>Price: {price} $</div>
				<img src={addToCartIcon} alt='Add to cart' width={40} />
			</div>
		</div>
	)
}

export default ProductsItem
