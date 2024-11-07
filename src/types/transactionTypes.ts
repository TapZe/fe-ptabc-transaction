import { PaginatedResponse } from "./generalTypes";
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