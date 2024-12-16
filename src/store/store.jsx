import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../service/shopApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { utilsApi } from "../service/utilsApi";

export const store = configureStore({
    reducer: {
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