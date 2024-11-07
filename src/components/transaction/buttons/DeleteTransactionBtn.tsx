import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DeleteActionProps } from "../../../types/generalTypes";
import { useDeleteTransactionMutation } from "../../../redux/reducers/transactions/transactionMutationAPI";
import { useState } from "react";

const DeleteTransactionBtn: React.FC<DeleteActionProps> = ({ id, refetch }) => {
  const [deleteTransaction] = useDeleteTransactionMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteTransaction(id).unwrap();
      setIsModalOpen(false);
      refetch();
    } catch (error) {
      console.error("Failed to delete the transaction: ", error);
    }
  };

  return (
    <>
      <button
        className="btn btn-outline btn-error"
        onClick={() => setIsModalOpen(true)}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>

      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="font-bold text-lg">Confirm Deletion</h2>
            <p className="py-4">
              Are you sure you want to delete this transaction?
            </p>
            <div className="modal-action">
              <button className="btn btn-error" onClick={handleDelete}>
                Yes, Delete
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

export default DeleteTransactionBtn;
