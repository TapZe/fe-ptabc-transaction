import { PagingBtnTransactionProps } from "../../../types/transactionTypes";

const PaginationBtn: React.FC<PagingBtnTransactionProps> = ({
  data,
  setQueryParameters,
  queryParameters,
}) => {
  const handlePageChange = (page: number) => {
    setQueryParameters({ ...queryParameters, page });
  };

  return (
    <div className="flex items-center justify-between p-4 rounded-lg shadow-md mt-6">
      <button
        onClick={() => handlePageChange(data.current_page - 1)}
        disabled={data.current_page === 1}
        className={`btn ${
          data.current_page === 1 ? "btn-disabled" : "btn-primary"
        }`}
      >
        Previous
      </button>
      <span className="text-lg font-semibold">
        Page {data.current_page} of {data.last_page}
      </span>
      <button
        onClick={() => handlePageChange(data.current_page + 1)}
        disabled={data.current_page === data.last_page}
        className={`btn ${
          data.current_page === data.last_page ? "btn-disabled" : "btn-primary"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationBtn;
