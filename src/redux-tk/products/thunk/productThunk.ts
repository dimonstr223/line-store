import { productsAPI } from '../../../api/api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProductItem } from "../types/productTypes"

export const fetchProducts = createAsyncThunk<IProductItem[]>(
	'users/FetchUsers',
	async ({limit, skipProducts}) => {
		const { data } = await productsAPI.getProducts(limit, skipProducts)
	return data
})