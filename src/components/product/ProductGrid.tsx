import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductTable from "./table/ProductTable";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AllProductProps } from "../../types/productTypes";

const ProductGrid: React.FC<AllProductProps> = ({ products, refetch }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-end">
          <Link to={"/product/add"} className="btn btn-primary btn-outline">
            <FontAwesomeIcon icon={faPlusCircle} />
            Add Product
          </Link>
        </div>
        <ProductTable products={products} refetch={refetch} />
      </div>
    </>
  );
};

export default ProductGrid;
