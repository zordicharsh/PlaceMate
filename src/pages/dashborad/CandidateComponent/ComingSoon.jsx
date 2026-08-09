import { useNavigate } from "react-router-dom";
import { FaClock, FaArrowLeft } from "react-icons/fa";

export default function ComingSoon({ title = "Feature" }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center bg-white rounded-3xl shadow-sm border border-slate-100">
      <div className="relative mb-6">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full blur-lg opacity-40 animate-pulse"></div>
        <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-full text-indigo-600">
          <FaClock size={48} className="animate-spin-slow" />
        </div>
      </div>

      <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
        {title} Coming Soon
      </h1>

      <p className="mt-4 text-slate-500 max-w-md text-lg">
        We're working hard to bring this feature to life. It will be available in the next release of PlaceMate!
      </p>

      <button
        onClick={() => navigate("/dashboard/candidate")}
        className="mt-8 flex items-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 hover:scale-105 active:scale-95 transition cursor-pointer shadow-md shadow-indigo-200"
      >
        <FaArrowLeft />
        Back to Dashboard
      </button>
    </div>
  );
}
