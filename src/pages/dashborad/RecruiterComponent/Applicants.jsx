import RecruiterHeader from "./RecruiterHeader";
import RecruiterSidebar from "./RecruiterSidebar";
import ApplicantsList from "./ApplicantsList";

export default function Applicants() {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      {/* Sidebar */}
      <RecruiterSidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-y-auto max-h-screen">
        {/* Header/Navbar Card */}
        <RecruiterHeader />

        {/* Content Body */}
        <div className="mt-8">
          <ApplicantsList />
        </div>
      </div>
    </div>
  );
}
