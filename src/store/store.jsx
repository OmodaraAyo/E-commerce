import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../service/shopApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(shopApi.middleware)
    }
});

setupListeners(store.dispatch)