import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://dummyjson.com/',
})

export const productsAPI = {
	getProducts() {
		return instance.get('products')
	},
}

export const categoriesAPI = {
	getCategories() {
		return instance.get('products/categories')
	},
}
