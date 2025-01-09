import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const utilsApi = createApi({
  reducerPath: "utilsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/products/category/",
  }),
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
      query: () => {
        return `mens-shirts`;
      },
    }),
    getWomenProductByCa: builder.query({
      query: () => {
        return `womens-dresses`;
      },
    }),

    getAllfragrances: builder.query({
      query: () => {
        return `fragrances`;
      },
    }),

    getAllJewelleries: builder.query({
      query: () => {
        return `womens-jewellery`;
      },
    }),

    getAllWomenBags: builder.query({
      query: () => {
        return `womens-bags`;
      },
    }),

    getMenShoes: builder.query({
      query: () => {
        return `mens-shoes`;
      },
    }),

    getWomenShoes: builder.query({
      query: () => {
        return `womens-shoes`;
      },
    }),

    getMenWatches: builder.query({
      query: () => {
        return `mens-watches`;
      },
    }),

    getWomenWatches: builder.query({
      query: () => {
        return `womens-watches`;
      },
    }),

    getGlasses: builder.query({
      query: () => {
        return `sunglasses`;
      },
    }),

    getWomenTops: builder.query({
      query: () => {
        return `tops`;
      },
    }),

    getSportAccessories: builder.query({
      query: () => {
        return `sports-accessories`;
      },
    }),

    getProductByName: builder.query({
      query: (productName)=> `https://dummyjson.com/products/search?q=${productName}`
    })
  }),
});

export const {
  useGetAllUtilsProductsQuery,
  useGetUtilsProductByIdQuery,
  useGetMenProductByCaQuery,
  useGetWomenProductByCaQuery,
  useGetAllfragrancesQuery,
  useGetAllJewelleriesQuery,
  useGetAllWomenBagsQuery,
  useGetMenShoesQuery,
  useGetWomenShoesQuery,
  useGetMenWatchesQuery,
  useGetWomenWatchesQuery,
  useGetGlassesQuery,
  useGetWomenTopsQuery,
  useGetSportAccessoriesQuery,
  useGetProductByNameQuery,
} = utilsApi;
