import { FaBell, FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-white shadow-sm rounded-xl  flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Welcome Back 👋
        </h1>

        <p className="text-slate-500">
          Let's find your dream opportunity today.
        </p>

      </div>

      <div className="flex items-center gap-5">

        <div className="relative">

          <FaSearch className="absolute left-3 top-3 text-slate-400" />

          <input
            type="text"
            placeholder="Search jobs..."
            className="pl-10 pr-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </div>

        <div className="relative cursor-pointer">

          <FaBell className="text-2xl text-slate-600" />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs h-5 w-5 flex justify-center items-center">
            3
          </span>

        </div>

        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-12 h-12 rounded-full"
          />

          <div>

            <h2 className="font-semibold">
              Naman
            </h2>

            <p className="text-sm text-slate-500">
              Candidate
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}