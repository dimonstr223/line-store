import React from 'react'
import { Product } from '../../../redux/products/types/productsTypes'

import addToCartIcon from '../../../assets/images/add-to-cart-icon.svg'

import style from '../../../scss/components/ProductsItem.module.scss'

const ProductsItem: React.FC<Product> = ({
	thumbnail,
	title,
	brand,
	price,
}) => {
	return (
		<div className={style.productItem}>
			<div className={style.img__wrapper}>
				<img src={thumbnail} alt='Product' />
			</div>
			<h3 className={style.title}>{title}</h3>
			<div className={style.brand}>{brand}</div>
			<div className={style.wrapper}>
				<div className={style.price}>Price: {price.toLocaleString()} $</div>
				<button className={style.addBtn}>
					<img src={addToCartIcon} alt='Add to cart' width={35} />
				</button>
			</div>
		</div>
	)
}

export default ProductsItem
