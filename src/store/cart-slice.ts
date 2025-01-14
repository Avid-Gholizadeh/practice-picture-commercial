import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

export type CartItem = {
    id: string
    title: string
    price: number
    quantity: number
}

const initialState: {items: CartItem[]} = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<{id: string; title: string; price: number}>) {
            const currentItem = state.items.find(item => item.id === action.payload.id)
            if (currentItem) {
                currentItem.quantity++
            } else {
                state.items.push({...action.payload, quantity: 1})
            }
        },
        removeFromCard(state, action: PayloadAction<string>) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload)
            const item = state.items[itemIndex]
            if (item.quantity > 1) {
                item.quantity--
            } else if (item.quantity === 1) {
                state.items.splice(itemIndex, 1)
            }
        },
    },
})

export const cartSliceActions = cartSlice.actions
export const cartSliceReducer = cartSlice.reducer
