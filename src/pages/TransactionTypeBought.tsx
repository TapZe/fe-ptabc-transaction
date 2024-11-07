import ErrorMessage from "../components/ErrorMessage";
import Fallback from "../components/Fallback";
import { useGetTypeboughtQuery } from "../redux/reducers/transactions/transactionQueryAPI";
import TransactionTypeBoughtGrid from "../components/transaction/TransactionTypeBoughtGrid";
import { TransactionTypeBoughtQueryParams } from "../types/transactionTypes";
import { useState } from "react";

const Transaction = () => {
  const [typeBoughtParams, setTypeBoughtParams] =
    useState<TransactionTypeBoughtQueryParams>({});
  const { data, isLoading, error } = useGetTypeboughtQuery(typeBoughtParams);

  return (
    <>
      {isLoading && <Fallback />}
      {error && <ErrorMessage error={error} />}
      {data && (
        <div className="flex flex-col justify-between">
          <TransactionTypeBoughtGrid
            data={data}
            typeBoughtParams={typeBoughtParams}
            setTypeBoughtParams={setTypeBoughtParams}
          />
        </div>
      )}
    </>
  );
};

export default Transaction;
