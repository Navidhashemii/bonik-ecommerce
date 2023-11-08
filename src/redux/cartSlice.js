import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
  };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
      
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.items.push({ id: newItem.id, name: newItem.name, quantity: 1, image1: newItem.image1, price: newItem.price, discount: newItem.discount });
            }
          },
          removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
      
            if (existingItem && existingItem.quantity > 1) {
              existingItem.quantity -= 1;
            } else {
              state.items = state.items.filter(item => item.id !== id);
            }
          },
          clearCart(state) {
            state.items = [];
          },
    },

});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions
export default cartSlice.reducer