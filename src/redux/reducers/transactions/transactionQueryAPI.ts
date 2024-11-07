import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URI, TRANSACTION_BOUGHT, TRANSACTION_QUERY, TRANSACTION_SEARCH } from "../../../constants/apiBaseURI";
import { AllTransactions, AllTransactionTypeBought, Transaction, TransactionQueryParams, TransactionSearchQueryParams, TransactionTypeBoughtQueryParams } from '../../../types/transactionTypes';

//   GET|HEAD        api/transaction
//   GET|HEAD        api/transaction/search
//   GET|HEAD        api/transaction/typeBought
//   GET|HEAD        api/transaction/{transaction}

// Define a service using a base URL and expected endpoints
export const transactionQueryAPI = createApi({
  reducerPath: 'transactionQueryAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
  endpoints: (builder) => ({
    getAllTransactions: builder.query<AllTransactions, TransactionQueryParams >({
      query: ({page = 1, limit = 10}) => `${TRANSACTION_QUERY}?page=${page}&limit=${limit}`,
    }),
    getTransactionById: builder.query<Transaction, number>({
      query: (id) => `${TRANSACTION_QUERY}/${id}`,
    }),
    getTransactionSearch: builder.query<AllTransactions, TransactionSearchQueryParams>({
      query: ({ page = 1, limit = 10, sort_by = 'name' }) =>
        `${TRANSACTION_SEARCH}?page=${page}&limit=${limit}&sort_by=${sort_by}`,
    }),
    getTypebought: builder.query<AllTransactionTypeBought, TransactionTypeBoughtQueryParams>({
      query: ({ from, to }) => {
        let query = `${TRANSACTION_BOUGHT}`
        if (from || to) {
          const params = [];
          if (from) params.push(`from=${from}`);
          if (to) params.push(`to=${to}`);
          query += `?${params.join('&')}`;
        }
        return query
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTransactionByIdQuery, useGetAllTransactionsQuery, useGetTransactionSearchQuery, useGetTypeboughtQuery } = transactionQueryAPI