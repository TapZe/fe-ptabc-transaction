import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EditTransactionProps } from "../../../types/generalTypes";
import { useUpdateTransactionMutation } from "../../../redux/reducers/transactions/transactionMutationAPI";
import { useState } from "react";

const EditTransactionBtn: React.FC<EditTransactionProps> = ({
  transaction,
  refetch,
}) => {
  const [updateTransaction] = useUpdateTransactionMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionDate, setTransactionDate] = useState(
    transaction.transaction_date.split(" ")[0]
  );

  const handleUpdate = async () => {
    try {
      await updateTransaction({
        id: String(transaction.id),
        transaction_date: transactionDate,
      }).unwrap();
      setIsModalOpen(false);
      refetch();
    } catch (error) {
      console.error("Failed to update the transaction: ", error);
    }
  };

  return (
    <>
      <button
        className="btn btn-outline btn-primary"
        onClick={() => setIsModalOpen(true)}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>

      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="font-bold text-lg">Edit Transaction Date</h2>
            <input
              type="date"
              value={transactionDate}
              onChange={(e) => setTransactionDate(e.target.value)}
              className="input input-bordered w-full"
            />
            <div className="modal-action">
              <button className="btn btn-primary" onClick={handleUpdate}>
                Save Changes
              </button>
              <button className="btn" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTransactionBtn;
