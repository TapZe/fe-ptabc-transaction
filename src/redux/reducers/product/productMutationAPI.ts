import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URI, PRODUCT_QUERY } from "../../../constants/apiBaseURI";
import { AddProductParams, ProductMutationResponse, UpdateProductParams } from '../../../types/productTypes';

//   POST            api/product
//   PUT|PATCH       api/product/{transaction}
//   DELETE          api/product/{transaction}

// Define a service using a base URL and expected endpoints
export const productMutationAPI = createApi({
  reducerPath: 'productMutationAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
  endpoints: (builder) => ({
    addNewProduct: builder.mutation<ProductMutationResponse, AddProductParams>({
      query: (newTransaction) => ({
        url: `${PRODUCT_QUERY}`,
        method: 'POST',
        body: newTransaction,
      }),
    }),
    deleteProduct: builder.mutation<ProductMutationResponse, number>({
      query: (id) => ({
        url: `${PRODUCT_QUERY}/${id}`,
        method: 'DELETE',
      }),
    }),
    updateProduct: builder.mutation<ProductMutationResponse, UpdateProductParams>({
      query: ({ id, name, stock, product_type_id, product_type_name }) => ({
        url: `${PRODUCT_QUERY}/${id}`,
        method: 'PUT',
        body: { name, stock, product_type_id, product_type_name },
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddNewProductMutation, useDeleteProductMutation, useUpdateProductMutation  } = productMutationAPI