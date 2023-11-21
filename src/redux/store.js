import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    storage
}

const reducer = combineReducers({
    cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [],
})


export default store;