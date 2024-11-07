import { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Fallback from "../components/Fallback";
import TransactionGrid from "../components/transaction/TransactionGrid";
import { useGetAllTransactionsQuery } from "../redux/reducers/transactions/transactionQueryAPI";
import PaginationBtn from "../components/transaction/buttons/PaginationBtn";
import { QueryParameters } from "../types/generalTypes";

const Transaction = () => {
  const [queryParameters, setQueryParameters] = useState<QueryParameters>({
    page: 1,
    limit: 10,
  });
  const { data, isLoading, error } =
    useGetAllTransactionsQuery(queryParameters);

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
