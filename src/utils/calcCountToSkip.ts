export const calcCountToSkip = (pageNumber: number, limit: number) => {
	return (pageNumber - 1) * limit
}
