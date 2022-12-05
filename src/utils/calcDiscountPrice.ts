const calcDiscountPrice = (
	price: number,
	discountPercentage: number,
	quantity: number
) =>
	(
		Math.ceil(price - (price / 100) * discountPercentage) * quantity
	).toLocaleString()

export default calcDiscountPrice
