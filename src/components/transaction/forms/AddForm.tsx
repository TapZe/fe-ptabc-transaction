import { useState } from "react";
import { AllProductProps } from "../../../types/productTypes";
import { AddTransactionParams } from "../../../types/transactionTypes";
import { useAddNewTransactionMutation } from "../../../redux/reducers/transactions/transactionMutationAPI";
import BackToTransactionBtn from "../buttons/BackToTransactionBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const AddForm: React.FC<AllProductProps> = ({ products, refetch }) => {
  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState<AddTransactionParams>({
    selled_stock: 1,
    product_id: 0,
    transaction_date: today,
  });
  const [addTransaction] = useAddNewTransactionMutation();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [currentProductMax, setCurrentProductMax] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "selled_stock" || name === "product_id"
          ? Number(value)
          : value,
    });

    if (name === "product_id") {
      const product = products.find((product) => product.id === Number(value));
      if (product) {
        setCurrentProductMax(product.stock.quantity);
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await addTransaction(formData).unwrap();

      setShowSuccessAlert(true);
      setFormData({ selled_stock: 1, product_id: 0, transaction_date: today });
      setCurrentProductMax(0);
      refetch();

      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to add transaction: ", error);
    }
  };

  return (
    <div className="relative grow">
      {showSuccessAlert && (
        <div className="absolute top-4 z-50 w-[50%] left-[25%] lg:w-[35%] lg:left-[32.5%]">
          <div className="alert alert-success shadow-lg flex justify-center">
            <p>
              <FontAwesomeIcon icon={faCircleCheck} /> Transaction added
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
          Add Transaction
        </h2>

        <div className="mb-4">
          <label className="label">
            <span className="label-text">Selled Stock</span>
          </label>
          <input
            className="input input-bordered input-primary w-full max-w-md"
            type="number"
            name="selled_stock"
            min={currentProductMax > 0 ? 1 : 0}
            max={currentProductMax}
            value={formData.selled_stock}
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
            name="product_id"
            value={formData.product_id}
            onChange={handleChange}
            required
          >
            <option disabled value={0}>
              Pick your product
            </option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
          <div className="label">
            <span className="label-text-alt"></span>
            <span className="label-text-alt">
              In Stock: {currentProductMax}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label className="label">
            <span className="label-text">Transaction Date</span>
          </label>
          <input
            className="input input-bordered input-primary w-full max-w-md"
            type="date"
            name="transaction_date"
            value={formData.transaction_date}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <button type="submit" className="w-full btn btn-outline btn-primary">
            Add Transaction
          </button>
          <BackToTransactionBtn />
        </div>
      </form>
    </div>
  );
};

export default AddForm;
