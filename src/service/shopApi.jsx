import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (param) => {
        if (param) {
          return `products?${new URLSearchParams(param).toString()}`;
        }
        return `products`;
      },
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = shopApi;