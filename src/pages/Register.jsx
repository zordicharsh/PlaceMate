import { Link } from "react-router-dom";
import { FiUser, FiBriefcase } from "react-icons/fi";

function Register() {
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
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <div className="w-full">
            <h1 className="text-white text-4xl font-bold mb-2 tracking-tight">
              Create an account
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

            <h2 className="text-gray-400 text-lg font-medium mb-6">
              Choose your account type
            </h2>

            <div className="space-y-4">
              {/* Candidate Option Card */}
              <Link
                to="/register/candidate"
                className="block group bg-[#1c1c24] hover:bg-[#22222d] border border-white/5 hover:border-purple-500/40 rounded-2xl p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-purple-500/5"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600/10 text-purple-400 p-3.5 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <FiUser size={26} />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold group-hover:text-purple-400 transition-colors duration-200">
                      Join as a Candidate
                    </h3>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                      Find jobs, showcase your skills, and apply to top companies worldwide.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Recruiter Option Card */}
              <Link
                to="/register/recruiter"
                className="block group bg-[#1c1c24] hover:bg-[#22222d] border border-white/5 hover:border-purple-500/40 rounded-2xl p-6 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-purple-500/5"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600/10 text-purple-400 p-3.5 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <FiBriefcase size={26} />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold group-hover:text-purple-400 transition-colors duration-200">
                      Join as a Recruiter
                    </h3>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                      Post job listings, manage hiring pipelines, and find top talent.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;