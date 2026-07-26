import { FaBell, FaSearch } from "react-icons/fa";

export default function RecruiterHeader() {
  return (
    <div className="bg-white shadow-sm rounded-xl p-5 flex justify-between items-center">
      {/* Left Greeting */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Welcome Back 👋
        </h1>
        <p className="text-slate-500 text-sm">
          Let's find the best talent for your team today.
        </p>
      </div>

      {/* Right User Actions */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <div className="relative hidden md:block">
          <FaSearch className="absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search candidates..."
            className="pl-10 pr-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-indigo-500 text-xs font-semibold"
          />
        </div>

        {/* Notifications Bell */}
        <div className="relative cursor-pointer">
          <FaBell className="text-2xl text-slate-600" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-[10px] h-5 w-5 flex justify-center items-center font-bold">
            3
          </span>
        </div>

        {/* Profile Card */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-12 h-12 rounded-full border border-slate-200"
          />
          <div>
            <h2 className="font-semibold text-slate-800 text-sm">
              Sarah Connor
            </h2>
            <p className="text-xs text-slate-500">
              Recruiter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
