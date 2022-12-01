const calcDiscountPrice = (price: number, discountPercentage: number) =>
	Math.ceil(price - (price / 100) * discountPercentage).toLocaleString()

export default calcDiscountPrice
