import Sidebar from "./sidebar";
import Navbar from "./navbar";
import StatsCards from "./StatsCards";
import ProfileProgress from "./ProfileProgress";
export default function CandidateDashboard() {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        <Navbar />

        <div className="mt-8">

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-10 text-white shadow-lg">

            <h1 className="text-4xl font-bold">
              Good Morning 👋
            </h1>

            <p className="mt-3 text-lg text-indigo-100">
              Ready to land your dream job?
            </p>

            <button className="mt-6 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition">
              Complete Profile
            </button>

          </div>

        </div>
        <div className="mt-8">
  <StatsCards />
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
  <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
    <h2 className="text-2xl font-bold mb-4">
      Recommended Jobs
    </h2>

    <p className="text-slate-500">
      Job recommendations will appear here.
    </p>
  </div>

  <ProfileProgress />
</div>
      </div>

    </div>
  );
}