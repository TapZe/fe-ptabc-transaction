import { TransactionTypeBoughtProps } from "../../../types/transactionTypes";

const TypeBoughtTable: React.FC<TransactionTypeBoughtProps> = ({ data }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>No</th>
              <td>Product Type</td>
              <td>Total Selled</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.product_type_name}</td>
                <td>{item.total_selled_stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TypeBoughtTable;
