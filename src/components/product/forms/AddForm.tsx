import { useState } from "react";
import {
  AddProductParams,
  AllProductTypeProps,
} from "../../../types/productTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useAddNewProductMutation } from "../../../redux/reducers/product/productMutationAPI";
import BackToProductBtn from "../buttons/BackToProductBtn";

const AddForm: React.FC<AllProductTypeProps> = ({ refetch, productTypes }) => {
  const [formData, setFormData] = useState<AddProductParams>({
    name: "",
    stock: 100,
    product_type_id: 0,
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [addProduct] = useAddNewProductMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addProduct(formData).unwrap();
      setShowSuccessAlert(true);
      refetch();
      setFormData({ name: "", stock: 100, product_type_id: 0 });

      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to add product: ", error);
    }
  };

  return (
    <>
      <div className="relative grow">
        {showSuccessAlert && (
          <div className="absolute top-4 z-50 w-[50%] left-[25%] lg:w-[35%] lg:left-[32.5%]">
            <div className="alert alert-success shadow-lg flex justify-center">
              <p>
                <FontAwesomeIcon icon={faCircleCheck} /> Product added
                successfully!
              </p>
            </div>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-4 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold text-center mb-4">
            Add Product
          </h2>

          <div className="mb-4">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              className="input input-bordered input-primary w-full max-w-md"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="label">
              <span className="label-text">Initial Stock</span>
            </label>
            <input
              className="input input-bordered input-primary w-full max-w-md"
              type="number"
              name="stock"
              min={1}
              value={formData.stock}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="label">
              <span className="label-text">Product</span>
            </label>
            <select
              className="select select-primary w-full max-w-md"
              name="product_type_id"
              value={formData.product_type_id}
              onChange={handleChange}
              required
            >
              <option disabled value={0}>
                Pick your product
              </option>
              <option value={-1}>Add new?</option>
              {productTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
            {formData.product_type_id == -1 && (
              <>
                <div className="mt-2">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input
                    className="input input-bordered input-primary w-full max-w-md"
                    type="text"
                    name="product_type_name"
                    value={formData.product_type_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="w-full btn btn-outline btn-primary"
            >
              Add Product
            </button>
            <BackToProductBtn />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddForm;
