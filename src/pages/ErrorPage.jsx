import { Link } from "react-router";
import errLogo from "../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-3 px-5">
      <img src={errLogo} alt="Error Logo" className=""/>
      <p className="font-semibold text-4xl">Oops, page not found!</p>
      <p className="text-sm text-gray-600">The page you are looking for is not available.</p>
      <Link
        to="/"
        className="btn text-white font-medium bg-linear-to-bl from-[#632EE3] to-[#9F62F2]"
      >
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
