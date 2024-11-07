import { Dispatch, SetStateAction } from "react";
import { PaginatedResponse, QueryParametersState } from "./generalTypes";
import { Product } from "./productTypes";
import { User } from "./userTypes";

export type Transaction = {
    id: number;
    starting_stock: number;
    selled_stock: number;
    transaction_date: string;
    product_id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    user: User;
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

export type AllTransactionsGridProps = AllTransactionsProps & QueryParametersState

export type PagingBtnTransactionProps = QueryParametersState & {
    data: AllTransactions;
}

export type TransactionQueryParams = {
    page?: number;
    limit?: number;
}

export type TransactionSearchQueryParams =  TransactionQueryParams & {
    sort_by?: "name" | "date";
}

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
