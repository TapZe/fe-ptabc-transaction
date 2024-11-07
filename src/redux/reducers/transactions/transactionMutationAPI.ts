import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URI, TRANSACTION_QUERY } from "../../../constants/apiBaseURI";
import { AddTransactionParams, TransactionMutationResponse } from '../../../types/transactionTypes';

//   POST            api/transaction
//   PUT|PATCH       api/transaction/{transaction}
//   DELETE          api/transaction/{transaction}

// Define a service using a base URL and expected endpoints
export const transactionMutationAPI = createApi({
  reducerPath: 'transactionMutationAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
  endpoints: (builder) => ({
    addNewTransaction: builder.mutation<TransactionMutationResponse, AddTransactionParams>({
      query: (newTransaction) => ({
        url: `${TRANSACTION_QUERY}`,
        method: 'POST',
        body: newTransaction,
      }),
    }),
    deleteTransaction: builder.mutation<TransactionMutationResponse, string>({
      query: (id) => ({
        url: `${TRANSACTION_QUERY}/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddNewTransactionMutation } = transactionMutationAPI