export const calcPages = (totalProducts: number, limit: number) => {
	const pagesCount = Math.ceil(totalProducts / limit)
	const pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	return pages
}
