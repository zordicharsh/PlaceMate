import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white fixed w-full top-0 left-0 border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-blue-600">
            PlaceMate
          </span>
        </Link>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link to="/login">
            <button className="px-5 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Register
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;