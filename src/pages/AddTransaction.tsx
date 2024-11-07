import ErrorMessage from "../components/ErrorMessage";
import Fallback from "../components/Fallback";
import AddForm from "../components/transaction/forms/AddForm";
import { useGetAllProductQuery } from "../redux/reducers/product/productQueryAPI";

const AddTransaction = () => {
  const { data, isLoading, error, refetch } = useGetAllProductQuery();

  return (
    <>
      {isLoading && <Fallback />}
      {error && <ErrorMessage error={error} />}
      {data && <AddForm products={data} refetch={refetch} />}
    </>
  );
};

export default AddTransaction;
