import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const BackToTransactionBtn = () => {
  return (
    <>
      <Link to={"/transaction"} className="btn btn-secondary btn-outline">
        <FontAwesomeIcon icon={faChevronLeft} />
        Back to Transaction
      </Link>
    </>
  );
};

export default BackToTransactionBtn;
