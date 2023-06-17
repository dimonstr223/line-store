import axios from 'axios'
import { IProductItem } from "../redux-tk/products/types/productTypes"

const instance = axios.create({
	baseURL: 'https://dummyjson.com/',
})

export const productsAPI = {
	getProducts(limit: number, skipProducts: number) {
		return instance.get<IProductItem[]>(`products?limit=${limit}&skip=${skipProducts}`)
	},
	getProductsOfCategory(categoryName: string) {
		return instance.get(`products/category/${categoryName}`)
	},
	getProudctsFromSearch(searchValue: string) {
		return instance.get(`products/search?q=${searchValue}`)
	},
	getSingleProduct(id: string) {
		return instance.get(`products/${id}`)
	},
}

export const categoriesAPI = {
	getCategories() {
		return instance.get('products/categories')
	},
}
