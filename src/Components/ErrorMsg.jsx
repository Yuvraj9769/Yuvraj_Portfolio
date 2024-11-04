import { Link } from "react-router-dom";

const ErrorMsg = () => {
  return (
    <div className="w-full h-screen inline-flex flex-col items-center justify-center gap-10">
      <h1 className="text-slate-50 text-2xl lg:text-6xl font-semibold text-center">
        Sorry Page Not Found 404
      </h1>
      <button className="text-xl px-3 py-2 rounded-lg shadow-md bg-red-600 text-slate-50 font-semibold text-center hover:bg-red-500 duration-500 transition-colors">
        <Link to="/">Back To Portfolio</Link>
      </button>
    </div>
  );
};

export default ErrorMsg;
