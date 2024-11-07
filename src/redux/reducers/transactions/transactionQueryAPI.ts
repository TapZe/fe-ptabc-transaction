import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URI, TRANSACTION_BOUGHT, TRANSACTION_QUERY, TRANSACTION_SEARCH } from "../../../constants/apiBaseURI";
import { AllTransactions, AllTransactionTypeBought, Transaction } from '../../../types/transactionTypes';

//   GET|HEAD        api/transaction
//   GET|HEAD        api/transaction/search
//   GET|HEAD        api/transaction/typeBought
//   GET|HEAD        api/transaction/{transaction}

// Define a service using a base URL and expected endpoints
export const transactionQueryAPI = createApi({
  reducerPath: 'transactionQueryAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
  endpoints: (builder) => ({
    getAllTransactions: builder.query<AllTransactions, number | void>({
      query: (page = 1) => `${TRANSACTION_QUERY}?page=${page}`,
    }),
    getTransactionById: builder.query<Transaction, number>({
      query: (id) => `${TRANSACTION_QUERY}/${id}`,
    }),
    getTransactionSearch: builder.query<AllTransactions, number | void>({
      query: (page = 1) => `${TRANSACTION_SEARCH}?page=${page}`,
    }),
    getTypebought: builder.query<AllTransactionTypeBought, void>({
      query: () => `${TRANSACTION_BOUGHT}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTransactionByIdQuery, useGetAllTransactionsQuery, useGetTransactionSearchQuery, useGetTypeboughtQuery } = transactionQueryAPI