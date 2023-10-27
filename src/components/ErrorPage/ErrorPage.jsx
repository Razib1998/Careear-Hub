import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center mt-52">
      <div>
        <h2 className="text-2xl font-bold mb-10">Oops..!!</h2>
        <Link to={"/"}>
          <button className="btn btn-active btn-secondary">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
