import { useNavigate } from "react-router-dom";
import RecruiterHeader from "./RecruiterHeader";
import RecruiterSidebar from "./RecruiterSidebar";
import StatsCards from "./StatsCards";
import RecentApplicants from "./RecentApplicants";
import InterviewsList from "./InterviewsList";

export default function RecruiterDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex bg-slate-100 min-h-screen">
      {/* Sidebar on the Left */}
      <RecruiterSidebar />

      {/* Main content block on the Right */}
      <div className="flex-1 p-8 overflow-y-auto max-h-screen">
        {/* Navbar */}
        <RecruiterHeader />

        {/* Welcome Hero Banner */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-10 text-white shadow-lg">
            <h1 className="text-4xl font-bold">
              Good Morning 👋
            </h1>
            <p className="mt-3 text-lg text-indigo-100">
              Ready to find your next star hire?
            </p>
            <button
              onClick={() => navigate("/recruiter/post-job")}
              className="mt-6 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition cursor-pointer"
            >
              Post a New Job
            </button>
          </div>
        </div>

        {/* Stats Cards Section */}
        <div className="mt-8">
          <StatsCards />
        </div>

        {/* Bottom Metrics Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Recent Candidate applications grid */}
          <div className="lg:col-span-2">
            <RecentApplicants />
          </div>

          {/* Today's upcoming schedules */}
          <div className="lg:col-span-1">
            <InterviewsList />
          </div>
        </div>
      </div>
    </div>
  );
}
