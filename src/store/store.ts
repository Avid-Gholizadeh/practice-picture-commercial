import {configureStore} from '@reduxjs/toolkit'
import {cartSliceReducer} from './cart-slice'

export const store = configureStore({reducer: {cart: cartSliceReducer}})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
