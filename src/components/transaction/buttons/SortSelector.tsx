import { TransactionQueryParamsState } from "../../../types/transactionTypes";

const SortSelector: React.FC<TransactionQueryParamsState> = ({
  queryParameters,
  setQueryParameters,
}) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sort_by = event.target.value;
    setQueryParameters({ ...queryParameters, sort_by });
  };

  return (
    <>
      <select
        className="select select-primary w-full max-w-60"
        onChange={handleSortChange}
      >
        <option disabled selected>
          Sort By?
        </option>
        <option value="name">Name</option>
        <option value="date">Transaction Date</option>
      </select>
    </>
  );
};

export default SortSelector;
