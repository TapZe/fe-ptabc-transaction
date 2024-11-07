import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URI, TRANSACTION_BOUGHT, TRANSACTION_QUERY, TRANSACTION_SEARCH } from "../../../constants/apiBaseURI";
import { AllTransactions, AllTransactionTypeBought, Transaction } from '../../../types/transactionTypes';

//   POST            api/transaction
//   PUT|PATCH       api/transaction/{transaction}
//   DELETE          api/transaction/{transaction}

// Define a service using a base URL and expected endpoints
export const transactionMutationAPI = createApi({
  reducerPath: 'transactionMutationAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
  endpoints: (builder) => ({
    newTransaction: builder.mutation<AllTransactions, void>({
      query: () => `${TRANSACTION_QUERY}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTransactionByIdQuery, useGetAllTransactionsQuery } = transactionQueryAPI