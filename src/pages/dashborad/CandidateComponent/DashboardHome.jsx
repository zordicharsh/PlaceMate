import StatsCards from "./StatsCards";
import ProfileProgress from "./ProfileProgress";
import Navbar from "./Navbar";

export default function DashboardHome() {
  return (
    <> 
    <Navbar />
      <div className="mt-8 space-y-6">
         
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

      <div className="mt-8">
        <ProfileProgress />
      </div>
    </>
  );
}