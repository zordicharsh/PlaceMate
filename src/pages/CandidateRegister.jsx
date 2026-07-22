import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import axios from "axios";

function CandidateRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = axios.post(
        "http://localhost:5000/api/users/register/candidate",
        formData
      );
      console.log(response);
      console.log("Candidate Registration Submitted:");
    } catch (error) {
    console.log(error.response?.data || error.message);
  }
  };

  return (
    <div className="bg-[#1c1c24] min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-5xl bg-[#13131a] rounded-3xl overflow-hidden shadow-2xl border border-white/5 flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="hidden md:block md:w-1/2 relative min-h-125">
          <img
            src="https://blog.ipleaders.in/wp-content/uploads/2017/05/iPleaders-12.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#13131a] via-purple-950/40 to-transparent"></div>
          <div className="absolute bottom-12 left-12 right-12 text-white">
            <h2 className="text-4xl font-bold tracking-tight mb-2">
              Capturing Jobs,
            </h2>
            <p className="text-xl text-purple-200 font-medium">
              Creating Jobs
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16">
          <div className="w-full max-w-md">
            <h1 className="text-white text-4xl font-bold mb-2 tracking-tight">
              Join as a Candidate
            </h1>
            <p className="text-gray-400 mb-8 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-200"
              >
                Login
              </Link>
            </p>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 rounded-xl p-3 font-semibold hover:bg-gray-100 hover:shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <FcGoogle size={22} />
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-800"></div>
              <span className="px-4 text-gray-500 text-xs font-semibold tracking-wider">
                OR
              </span>
              <div className="flex-1 h-px bg-gray-800"></div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                  <FiUser size={20} />
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-[#1c1c24] text-white rounded-xl py-3.5 pl-12 pr-4 outline-none border border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 placeholder:text-gray-500"
                />
              </div>

              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                  <FiMail size={20} />
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full bg-[#1c1c24] text-white rounded-xl py-3.5 pl-12 pr-4 outline-none border border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 placeholder:text-gray-500"
                />
              </div>

              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                  <FiLock size={20} />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1c1c24] text-white rounded-xl py-3.5 pl-12 pr-12 outline-none border border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 placeholder:text-gray-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors duration-200"
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </button>
              </div>

              <label className="flex items-center gap-3 text-gray-400 text-sm cursor-pointer py-1 select-none">
                <input
                  type="checkbox"
                  required
                  className="accent-purple-600 w-4 h-4 cursor-pointer"
                />
                <span>
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                  >
                    Terms & Conditions
                  </Link>
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-500 text-white rounded-xl py-3.5 font-semibold hover:shadow-lg hover:shadow-purple-600/20 active:scale-[0.98] transition-all duration-200 cursor-pointer mt-2"
              >
                Create Candidate Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateRegister;
