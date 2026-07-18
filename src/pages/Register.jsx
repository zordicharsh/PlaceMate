import { useState } from "react";

function Register() {
  const [role, setRole] = useState("jobseeker");

  return (
    <div className="bg-[#1c1c24] h-screen flex items-center justify-center p-6">
      <div className="w-full h-full bg-[#13131a] rounded-3xl overflow-hidden shadow-2xl flex">

        {/* Left Section */}
        <div className="w-full md:w-1/2 relative">
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
        <div className="w-full md:w-1/2 flex items-center justify-center p-12">
          <div className="w-full max-w-md">

            <h1 className="text-white text-4xl font-semibold mb-2">
              Create an account
            </h1>

            <p className="text-gray-400 mb-8">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-white hover:underline"
              >
                Login
              </a>
            </p>

            {/* Role Toggle */}
            <div className="flex w-full bg-[#1c1c24] rounded-lg p-1 mb-6">
              <button
                type="button"
                onClick={() => setRole("jobseeker")}
                className={`w-1/2 py-2 rounded-lg transition-all duration-300 ${
                  role === "jobseeker"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400"
                }`}
              >
                I am Job Seeker
              </button>

              <button
                type="button"
                onClick={() => setRole("jobgiver")}
                className={`w-1/2 py-2 rounded-lg transition-all duration-300 ${
                  role === "jobgiver"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400"
                }`}
              >
                I am Job Giver
              </button>
            </div>

            <form key={role} className="space-y-4">

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-[#1c1c24] text-white rounded-lg p-3 outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#1c1c24] text-white rounded-lg p-3 outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full bg-[#1c1c24] text-white rounded-lg p-3 outline-none"
              />

              {/* Show only for Job Giver */}
              {role === "jobgiver" && (
                <>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full bg-[#1c1c24] text-white rounded-lg p-3 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Enter your organisation name"
                    className="w-full bg-[#1c1c24] text-white rounded-lg p-3 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Enter your role"
                    className="w-full bg-[#1c1c24] text-white rounded-lg p-3 outline-none"
                  />
                </>
              )}

              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" />
                I agree to the Terms & Conditions
              </label>

              <button
                type="submit"
                className="w-full bg-purple-600 rounded-lg p-3 text-white hover:bg-purple-700"
              >
                Create Account
              </button>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;