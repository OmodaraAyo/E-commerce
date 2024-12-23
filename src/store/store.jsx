import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../service/shopApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { utilsApi } from "../service/utilsApi";
import authReducer from '../auth/authSlice'
import cartReducer from '../pages/cart/cartSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [utilsApi.reducerPath]: utilsApi.reducer
    },
    middleware: (getDefaultMiddleware)=>{
    return getDefaultMiddleware()
        .concat(shopApi.middleware)
        .concat(utilsApi.middleware)
    }
});

setupListeners(store.dispatch)