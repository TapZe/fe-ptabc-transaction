import TypeBoughtTable from "./table/TypeBoughtTable";
import { TransactionTypeBoughtGridProps } from "../../types/transactionTypes";
import DateSelector from "./buttons/DateSelector";
import BackToTransactionBtn from "./buttons/BackToTransactionBtn";

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
        <BackToTransactionBtn />
      </div>
    </>
  );
};

export default TransactionTypeBoughtGrid;
