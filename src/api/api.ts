import axios from 'axios'

const productsAPI = {
	getProducts() {
		return axios.get('https://dummyjson.com/products')
	},
}
