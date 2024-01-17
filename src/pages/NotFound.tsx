import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid h-screen justify-center content-center text-center">
      <div className="text-3xl font-bold mb-5">Page not found</div>
      <div className="text-sm py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-lg w-auto">
        <Link to="/">Go to Homepage</Link>
      </div>
    </div>
  );
};

export default NotFound;
