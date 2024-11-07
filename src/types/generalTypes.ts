import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Transaction } from "./transactionTypes";

export type errorMsgProps = {
    error: FetchBaseQueryError | SerializedError;
}

export interface ProtectedRouteProps {
  element: React.ReactNode;
}

export interface PaginatedResponse {
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export type DeleteActionProps = {
    id: number;
    refetch: () => void;
}

export type EditTransactionProps = {
    transaction: Transaction;
    refetch: () => void;
}