import { AllTransactionsProps } from "../../../types/transactionTypes";
import { formatTransactionDateTable } from "../../../utils/dateFormating";
import DeleteTransactionBtn from "../buttons/DeleteTransactionBtn";
import EditTransactionBtn from "../buttons/EditTransactionBtn";

const TransactionTable: React.FC<AllTransactionsProps> = ({
  transactions,
  refetch,
}) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>No</th>
              <td>Product Name</td>
              <td>Starting Stock</td>
              <td>Selled Stock</td>
              <td>Transaction Date</td>
              <td>Product Type</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={transaction.id}>
                <td>{index + 1}</td>
                <td>{transaction.product.name}</td>
                <td>{transaction.starting_stock}</td>
                <td>{transaction.selled_stock}</td>
                <td>
                  {formatTransactionDateTable(transaction.transaction_date)}
                </td>
                <td>{transaction.product.type.name}</td>
                <td className="flex flex-wrap gap-2">
                  {refetch && (
                    <>
                      <EditTransactionBtn
                        transaction={transaction}
                        refetch={refetch}
                      />
                      <DeleteTransactionBtn
                        id={transaction.id}
                        refetch={refetch}
                      />
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionTable;
