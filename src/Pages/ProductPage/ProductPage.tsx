import React from 'react'

import style from '../../scss/components/ProductPage.module.scss'

const ProductPage: React.FC = () => {
	return (
		<div className={style.productPage}>
			<h1 className={style.title}>Brand / Title</h1>
			<div className={style.rating}>********(rating)</div>
			<div className={style.info}>
				<div className={style.gallery}>Images Galery Slider</div>
				<div className={style.infoPanel}>
					<div className={style.price}>
						<div className={style.discountPrice}>price</div>
						<div className={style.prevPrice}>prevPrice</div>
					</div>
					<button className={style.addToCartBtn}>Add to cart</button>
					<div className={style.stock}>Stock: 94</div>
				</div>
			</div>
			<h3 className={style.description__title}>Description</h3>
			<p className={style.description__text}>
				Description text about the product
			</p>
			<h3 className={style.similar__title}>Similar</h3>
			<ul className={style.similar__products}>
				<li className={style.similar__item}>Product</li>
			</ul>
		</div>
	)
}

export default ProductPage
