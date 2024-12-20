import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const utilsApi = createApi({
  reducerPath: "utilsApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/products/category/' }),
  endpoints: (builder) => ({
    getAllUtilsProducts: builder.query({
      query: (param) => {
        if (param) {
          return `products?${new URLSearchParams(param).toString()}`;
        }
        return `products`;
      },
    }),
    getUtilsProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    getMenProductByCa: builder.query({
      query: () =>{
        return `mens-shirts`
      },
    }),
    
  }),
});

export const { useGetAllUtilsProductsQuery, useGetUtilsProductByIdQuery, useGetMenProductByCaQuery } = utilsApi;