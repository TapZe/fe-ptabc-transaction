import { useEffect } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Fallback from "../components/Fallback";
import ProductGrid from "../components/product/ProductGrid";
import { useGetAllProductQuery } from "../redux/reducers/product/productQueryAPI";

const Product = () => {
  const { data, isLoading, error, refetch } = useGetAllProductQuery();
  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      {isLoading && <Fallback />}
      {error && <ErrorMessage error={error} />}
      {data && <ProductGrid products={data} refetch={refetch} />}
    </>
  );
};

export default Product;
