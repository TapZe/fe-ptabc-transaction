import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductProps, UpdateProductParams } from "../../../types/productTypes";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useUpdateProductMutation } from "../../../redux/reducers/product/productMutationAPI";
import { useState } from "react";
import { useGetAllProductTypeQuery } from "../../../redux/reducers/product/productQueryAPI";

const EditProductBtn: React.FC<ProductProps> = ({ product, refetch }) => {
  const [updateProduct] = useUpdateProductMutation();
  const {
    data,
    isLoading,
    isError,
    refetch: reGetType,
  } = useGetAllProductTypeQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<UpdateProductParams>({
    id: product.id,
    name: product.name,
    product_type_id: product.product_type_id,
    product_type_name: product.type.name,
    stock: product.stock.quantity,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProduct(formData);
    refetch();
    reGetType();
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="btn btn-outline btn-primary"
        onClick={() => setIsModalOpen(true)}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>

      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <span
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </span>
            <h2 className="text-lg font-bold">Edit Product</h2>
            <form onSubmit={handleSubmit} className="py-4">
              <div className="form-control mb-4">
                <label htmlFor="name" className="label">
                  Product Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Product</span>
                </label>
                <select
                  className="select select-primary w-full max-w-md"
                  name="product_type_id"
                  value={formData.product_type_id}
                  onChange={handleInputChange}
                  required
                >
                  <option disabled value={0}>
                    Pick your product
                  </option>
                  <option value={-1}>Add new?</option>
                  {isLoading && <option>Loading...</option>}
                  {isError && <option>Error loading product types</option>}
                  {data &&
                    data.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                </select>
                {formData.product_type_id == -1 && (
                  <div className="mt-2">
                    <label className="label">
                      <span className="label-text">Product Name</span>
                    </label>
                    <input
                      className="input input-bordered input-primary w-full max-w-md"
                      type="text"
                      name="product_type_name"
                      value={formData.product_type_name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                )}
              </div>
              <div className="form-control mb-4">
                <label htmlFor="stock" className="label">
                  Stock Quantity:
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Update Product
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProductBtn;
