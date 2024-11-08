import ErrorMessage from "../components/ErrorMessage";
import Fallback from "../components/Fallback";
import AddForm from "../components/product/forms/AddForm";
import { useGetAllProductTypeQuery } from "../redux/reducers/product/productQueryAPI";

const AddProduct = () => {
  const { data, isLoading, error, refetch } = useGetAllProductTypeQuery();

  return (
    <>
      {isLoading && <Fallback />}
      {error && <ErrorMessage error={error} />}
      {data && <AddForm productTypes={data} refetch={refetch} />}
    </>
  );
};

export default AddProduct;
