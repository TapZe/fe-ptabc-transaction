import { QueryParametersState } from "../../../types/generalTypes";

const LimitSelection: React.FC<QueryParametersState> = ({
  queryParameters,
  setQueryParameters,
}) => {
  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const limit = Number(event.target.value);
    setQueryParameters({ ...queryParameters, limit });
  };

  return (
    <>
      <select
        className="select select-primary w-full max-w-xs"
        onChange={handleLimitChange}
      >
        <option disabled selected>
          How many items per page? (10 default)
        </option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </>
  );
};

export default LimitSelection;
