import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://dummyjson.com/',
})

export const productsAPI = {
	getProducts() {
		return instance.get('products')
	},
}
