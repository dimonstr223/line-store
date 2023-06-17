import { createSlice } from "@reduxjs/toolkit"

import { fetchProducts } from "../thunk/productThunk"

import { IProductState } from "../types/productTypes"
import { Status } from "../../../types/global"

const initialState: IProductState = {
	status: Status.LOADING,
	products: []
}

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// fetch products
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.status = Status.LOADING
				state.products = []
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = Status.SUCCESS
				state.products = action.payload
				console.log(state.products)
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = Status.ERROR
				state.products = []
			})
	}
})

export const { } = productSlice.actions

export default productSlice.reducer