import { Link } from "react-router-dom";
import TypeBoughtTable from "./table/TypeBoughtTable";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TransactionTypeBoughtGridProps } from "../../types/transactionTypes";
import DateSelector from "./buttons/DateSelector";

const TransactionTypeBoughtGrid: React.FC<TransactionTypeBoughtGridProps> = ({
  data,
  setTypeBoughtParams,
  typeBoughtParams,
}) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <DateSelector
          setTypeBoughtParams={setTypeBoughtParams}
          typeBoughtParams={typeBoughtParams}
        />
        <TypeBoughtTable data={data} />
        <Link to={"/transaction"} className="btn btn-primary btn-outline">
          <FontAwesomeIcon icon={faChevronLeft} />
          Back to Transaction
        </Link>
      </div>
    </>
  );
};

export default TransactionTypeBoughtGrid;
