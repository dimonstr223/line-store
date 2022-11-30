import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://dummyjson.com/',
})

export const productsAPI = {
	getProducts(limit: number, skipProducts: number) {
		return instance.get(`products?limit=${limit}&skip=${skipProducts}`)
	},
	getProductsOfCategory(categoryName: string) {
		return instance.get(`products/category/${categoryName}`)
	},
	getProudctsFromSearch(searchValue: string) {
		return instance.get(`products/search?q=${searchValue}`)
	},
}

export const categoriesAPI = {
	getCategories() {
		return instance.get('products/categories')
	},
}
