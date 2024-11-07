import { TransactionQueryParamsState } from "../../../types/transactionTypes";

const SearchInput: React.FC<TransactionQueryParamsState> = ({
  queryParameters,
  setQueryParameters,
}) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setQueryParameters({ ...queryParameters, name });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Cari nama produk"
        className="input input-bordered input-primary w-full max-w-60"
        onChange={handleSearchChange}
      />
    </>
  );
};

export default SearchInput;
