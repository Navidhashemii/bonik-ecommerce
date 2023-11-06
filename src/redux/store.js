import { configureStore } from "@reduxjs/toolkit";
import cartRecucer from "./cartSlice";


const store = configureStore({
    reducer: {
        cart: cartRecucer
    }
})


export default store;