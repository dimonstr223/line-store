export const countToSkip = (pageNumber: number, limit: number) => {
	return (pageNumber - 1) * limit
}
