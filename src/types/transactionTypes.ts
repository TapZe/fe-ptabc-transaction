import { Dispatch, SetStateAction } from "react";
import { PaginatedResponse } from "./generalTypes";
import { Product } from "./productTypes";

export type Transaction = {
    id: number;
    starting_stock: number;
    selled_stock: number;
    transaction_date: string;
    product_id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    product: Product;
}

export type AllTransactions = PaginatedResponse & {
    data: Transaction[];
}

export type TransactionTypeBought = {
    product_type_id: number;
    product_type_name: string;
    total_selled_stock: number;
};

export type AllTransactionTypeBought = TransactionTypeBought[];

export type AllTransactionsProps = {
    transactions: Transaction[];
}

// Search Query
export type TransactionQueryParams = {
    page?: number;
    limit?: number;
    sort_by?: string | "name" | "date" | null;
    name?: string;
}

export type TransactionQueryParamsState = {
    queryParameters: TransactionQueryParams,
    setQueryParameters: Dispatch<SetStateAction<TransactionQueryParams>>;
}

export type AllTransactionsGridProps = AllTransactionsProps & TransactionQueryParamsState;

export type PagingBtnTransactionProps = TransactionQueryParamsState & {
    data: AllTransactions;
}

// Type Bought Query
export type TransactionTypeBoughtQueryParams = {
    from?: string | null;
    to?: string | null;
}

export type TransactionTypeBoughtProps = {
    data: AllTransactionTypeBought;
}

export type TransactionTypeBoughtState = {
    typeBoughtParams: TransactionTypeBoughtQueryParams;
    setTypeBoughtParams: Dispatch<SetStateAction<TransactionTypeBoughtQueryParams>>;
}

export type TransactionTypeBoughtGridProps = TransactionTypeBoughtProps & TransactionTypeBoughtState

// Mutation
export type TransactionMutationResponse = {
    message: string;
    transaction: Transaction;
}

export type AddTransactionParams = {
    selled_stock: number;
    product_id: number;
    transaction_date?: string;
}