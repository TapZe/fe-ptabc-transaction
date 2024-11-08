import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TransactionQueryParamsState } from "../../../types/transactionTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchInput: React.FC<TransactionQueryParamsState> = ({
  queryParameters,
  setQueryParameters,
}) => {
  // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const name = event.target.value;
  //   setQueryParameters({ ...queryParameters, name });
  // };

  const handleSearchBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setQueryParameters({ ...queryParameters, name });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const name = event.currentTarget.value;
      setQueryParameters({ ...queryParameters, name });
    }
  };

  return (
    <div className="flex flex-row gap-2">
      <input
        type="text"
        placeholder="Cari nama produk"
        className="input input-bordered input-secondary w-full max-w-60"
        // onChange={handleSearchChange}
        onBlur={handleSearchBlur}
        onKeyDown={handleKeyDown}
      />
      <button className="btn btn-secondary btn-outline">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchInput;
