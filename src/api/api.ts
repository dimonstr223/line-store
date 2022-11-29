import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://dummyjson.com/',
})

const productsAPI = {
	getProducts() {
		return instance.get('products')
	},
}
