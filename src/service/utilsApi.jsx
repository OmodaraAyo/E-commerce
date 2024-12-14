import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const utilsApi = createApi({
  reducerPath: "utilsApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
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
  }),
});

export const { useGetAllUtilsProductsQuery, useGetUtilsProductByIdQuery } = utilsApi;