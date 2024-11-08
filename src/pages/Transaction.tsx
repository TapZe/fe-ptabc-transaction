import { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Fallback from "../components/Fallback";
import TransactionGrid from "../components/transaction/TransactionGrid";
import { useGetTransactionSearchQuery } from "../redux/reducers/transactions/transactionQueryAPI";
import PaginationBtn from "../components/transaction/buttons/PaginationBtn";
import { TransactionQueryParams } from "../types/transactionTypes";

const Transaction = () => {
  const [queryParameters, setQueryParameters] =
    useState<TransactionQueryParams>({
      page: 1,
      limit: 10,
    });
  const { data, isLoading, error, refetch } =
    useGetTransactionSearchQuery(queryParameters);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      {isLoading && <Fallback />}
      {error && <ErrorMessage error={error} />}
      {data && (
        <div className="flex flex-col justify-between">
          <TransactionGrid
            transactions={data.data}
            setQueryParameters={setQueryParameters}
            queryParameters={queryParameters}
            refetch={refetch}
          />
          <PaginationBtn
            data={data}
            setQueryParameters={setQueryParameters}
            queryParameters={queryParameters}
          />
        </div>
      )}
    </>
  );
};

export default Transaction;
