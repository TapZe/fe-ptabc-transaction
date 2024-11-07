import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AllTransactionsGridProps } from "../../types/transactionTypes";
import TransactionTable from "./table/TransactionTable";
import {
  faCashRegister,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import LimitSelection from "./buttons/LimitSelection";

const TransactionGrid: React.FC<AllTransactionsGridProps> = ({
  transactions,
  setQueryParameters,
  queryParameters,
}) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <LimitSelection
            queryParameters={queryParameters}
            setQueryParameters={setQueryParameters}
          />
          <Link to={"/"} className="btn btn-primary btn-outline">
            <FontAwesomeIcon icon={faPlusCircle} />
            Add Transaction
          </Link>
        </div>
        <div className="flex flex-row justify-end">
          <Link
            to={"/transaction/highestBought"}
            className="btn btn-primary btn-outline btn-sm"
          >
            <FontAwesomeIcon icon={faCashRegister} />
            Highest Bought Type
          </Link>
        </div>
        <TransactionTable transactions={transactions} />
      </div>
    </>
  );
};

export default TransactionGrid;
