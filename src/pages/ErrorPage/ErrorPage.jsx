import { Link, useRouteError } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ErrorPage = () => {
  useTitle('ErrorPage')
    const error = useRouteError()
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
      <img
        src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7971.jpg?w=740&t=st=1684514061~exp=1684514661~hmac=0c3022c2472dedcbe9ac690f705a0b05206a90419a303d11502396e4dfc955d7"
        alt="Error"
        className="max-w-md mb-8 md:mb-0 md:mr-8"
      />
      <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">404 Page Not Found</h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {error.statusText}
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-8">
        {error.message}
        </p>
       <Link to="/"> <button className="btn btn-primary mb-10">
          Go Back
        </button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;
