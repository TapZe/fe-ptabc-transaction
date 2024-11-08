import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URI, PRODUCT_QUERY, PRODUCT_TYPE_QUERY } from "../../../constants/apiBaseURI";
import { AllProducts } from '../../../types/productTypes';

//   GET|HEAD        api/product
//   GET|HEAD        api/product/type

// Define a service using a base URL and expected endpoints
export const productQueryAPI = createApi({
  reducerPath: 'productQueryAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
  endpoints: (builder) => ({
    getAllProduct: builder.query<AllProducts, void>({
      query: () => `${PRODUCT_QUERY}`,
    }),
    getAllProductType: builder.query<AllProducts, void>({
      query: () => `${PRODUCT_TYPE_QUERY}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductQuery, useGetAllProductTypeQuery } = productQueryAPI