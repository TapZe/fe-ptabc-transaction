import { AllProductProps } from "../../../types/productTypes";
import DeleteProductBtn from "../buttons/DeleteProductButton";
import EditProductBtn from "../buttons/EditProductBtn";
const ProductTable: React.FC<AllProductProps> = ({ products, refetch }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>No</th>
              <th>Product ID</th>
              <td>Product Name</td>
              <td>Current Stock</td>
              <td>Product Type</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.stock.quantity}</td>
                <td>{product.type.name}</td>
                <td className="flex flex-wrap gap-2">
                  <EditProductBtn product={product} refetch={refetch} />
                  <DeleteProductBtn id={product.id} refetch={refetch} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
