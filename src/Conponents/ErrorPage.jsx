import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="text-center">
        <h1 className="font-bold text-2xl">404</h1>
        <p className="text-xl font-semibold">Page not Found!</p>
        <Link to='/'>
          <button className="btn mt-5 btn-wide">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
