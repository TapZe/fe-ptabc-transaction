import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const BackToProductBtn = () => {
  return (
    <>
      <Link to={"/product"} className="btn btn-secondary btn-outline">
        <FontAwesomeIcon icon={faChevronLeft} />
        Back to Transaction
      </Link>
    </>
  );
};

export default BackToProductBtn;
