import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#1c1c24] flex items-center justify-center p-6">
      <div className="w-full h-full bg-[#13131a] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* Left Section */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="https://blog.ipleaders.in/wp-content/uploads/2017/05/iPleaders-12.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-purple-900/30"></div>

          <div className="absolute bottom-12 left-12 text-white">
            <h2 className="text-4xl font-semibold">
              Capturing Moments,
            </h2>
            <h2 className="text-4xl font-semibold">
              Creating Memories
            </h2>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md">

            {/* Heading */}
            <h1 className="text-4xl font-semibold text-white mb-2">
              Welcome Back
            </h1>

            <p className="text-gray-400 mb-8">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-purple-400 hover:underline"
              >
                Register here
              </Link>
            </p>

            {/* Google Login Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 rounded-lg p-3 font-medium hover:bg-gray-100 transition duration-300"
            >
              <FcGoogle size={24} />
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-700"></div>
              <span className="px-4 text-gray-400 text-sm">OR</span>
              <div className="flex-1 h-px bg-gray-700"></div>
            </div>

            {/* Login Form */}
            <form className="space-y-4" >

              {/* Email / Mobile */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#1c1c24] text-white rounded-lg p-3 outline-none border border-transparent focus:border-purple-500"
              />

              {/* Password */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full bg-[#1c1c24] text-white rounded-lg p-3 pr-12 outline-none border border-transparent focus:border-purple-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </button>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <Link
                  to="/forgot-password"
                  className="text-sm text-purple-400 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-purple-600 text-white rounded-lg p-3 font-medium hover:bg-purple-700 transition duration-300"
              >
                Login
              </button>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;