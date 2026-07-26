import {
  FaCheck,
  FaGraduationCap,
  FaHome,
  FaRocket,
} from "react-icons/fa";

export default function StepSidebar({ progress = 33 }) {
  return (
    <div className="w-80">

      {/* Main Card */}

      <div className="bg-white rounded-3xl shadow-2xl p-8 sticky top-8">

        {/* Heading */}

        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl">

            <FaRocket className="text-white text-3xl" />

          </div>

          <h2 className="text-3xl font-bold text-slate-800 mt-5">
            Complete Your Profile
          </h2>

          <p className="text-slate-500 mt-2">
            Build a strong profile to attract recruiters.
          </p>

        </div>

        {/* Progress */}

        <div className="mt-10">

          <div className="flex justify-between mb-3">

            <span className="font-semibold">
              Profile Completion
            </span>

            <span className="text-blue-600 font-bold">
              {progress}%
            </span>

          </div>

          <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden">

            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-700"
              style={{ width: `${progress}%` }}
            ></div>

          </div>

        </div>

        {/* Timeline */}

        <div className="relative mt-14">

          <div className="absolute left-7 top-6 h-[255px] w-1 bg-slate-200 rounded-full"></div>

          {/* STEP 1 */}

          <div className="relative flex items-center mb-12">

            <div className="z-10 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg">

              <FaCheck className="text-white text-lg" />

            </div>

            <div className="ml-5">

              <h3 className="font-bold text-slate-800">
                Basic Details
              </h3>

              <p className="text-green-600 text-sm">
                Completed
              </p>

            </div>

          </div>

          {/* STEP 2 */}

          <div className="relative flex items-center mb-12">

            <div className="z-10 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center ring-8 ring-blue-100 animate-pulse">

              <FaGraduationCap className="text-white text-xl" />

            </div>

            <div className="ml-5">

              <h3 className="font-bold text-blue-600">
                Education
              </h3>

              <p className="text-slate-500 text-sm">
                Current Step
              </p>

            </div>

          </div>
                    {/* STEP 3 */}

          <div className="relative flex items-center">

            <div className="z-10 w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center">

              <FaHome className="text-slate-500 text-xl" />

            </div>

            <div className="ml-5">

              <h3 className="font-bold text-slate-500">
                Dashboard
              </h3>

              <p className="text-slate-400 text-sm">
                Final Step
              </p>

            </div>

          </div>

        </div>

        {/* Bottom Card */}

        <div className="mt-14 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 shadow-xl">

          <div className="p-6 text-white">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">

                <FaRocket className="text-2xl" />

              </div>

              <div>

                <h3 className="font-bold text-lg">
                  You're Almost There!
                </h3>

                <p className="text-blue-100 text-sm">
                  Finish your profile and unlock all features.
                </p>

              </div>

            </div>

            <div className="mt-6 space-y-3">

              <div className="flex items-center gap-3">

                <FaCheck className="text-green-300" />

                <span className="text-sm">
                  Apply for internships
                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheck className="text-green-300" />

                <span className="text-sm">
                  Get recruiter recommendations
                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheck className="text-green-300" />

                <span className="text-sm">
                  AI Resume Analysis
                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheck className="text-green-300" />

                <span className="text-sm">
                  Practice coding & mock interviews
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}