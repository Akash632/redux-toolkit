import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    amount: 100,
    products: [],
    pending : false
}

export const getProducts = createAsyncThunk(
  'account/getProducts',
  async (thunkAPI) => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
  },
)

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 100  //immer library
    },
    decrement: (state) => {
      state.amount -= 100
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    },
  },
  extraReducers:(builder)=>{
    builder
    .addCase(getProducts.fulfilled, (state, action)=>{
      state.pending = false
      state.products = action.payload
    })
    .addCase(getProducts.pending, (state, action)=>{
      state.pending = true
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions

export default accountSlice.reducer