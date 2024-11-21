import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <>
      <section className="d-flex flex-column justify-content-center bg-light text-dark rounded p-5">
        <div className="d-flex flex-row justify-content-center">
          <FaExclamationTriangle className="text-warning fs-1 mt-1 me-2" />
          <h1>404 Not Found</h1>
        </div>
        <div className="d-flex justify-content-center w-100">
          <p>This page doesn't exist...</p>
        </div>
        <Link to="/" className="btn btn-success rounded">
          Go Back
        </Link>
      </section>
    </>
  );
};

export default NotFoundPage;
