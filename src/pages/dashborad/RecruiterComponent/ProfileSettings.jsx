import { useState } from "react";
import { FiUser, FiBriefcase, FiAlertCircle, FiCheck } from "react-icons/fi";
import RecruiterHeader from "./RecruiterHeader";
import RecruiterSidebar from "./RecruiterSidebar";

export default function ProfileSettings() {
  const [success, setSuccess] = useState(false);

  // Simple state for the 3 profile fields
  const [profileData, setProfileData] = useState({
    fullName: "Sarah Connor",
    role: "Senior Recruiter",
    orgRole: "Talent Acquisition Partner"
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  // Tailwind CSS styling classes aligned with Candidate UI
  const inputStyle = "w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/15 focus:border-indigo-500 text-slate-700 placeholder-slate-400 transition text-xs font-semibold shadow-sm";
  const labelStyle = "block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1";

  return (
    <div className="flex bg-slate-100 min-h-screen">
      {/* Sidebar on Left */}
      <RecruiterSidebar />

      {/* Main Content Area on Right */}
      <div className="flex-1 p-8 overflow-y-auto max-h-screen">
        {/* Floating navbar card */}
        <RecruiterHeader />

        {/* Form content */}
        <div className="mt-8 max-w-md mx-auto space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-xl font-bold text-slate-800">Recruiter Profile</h1>
            <p className="text-slate-400 text-xs mt-0.5">Manage your personal settings and organizational role.</p>
          </div>

          {/* Card wrapper matching candidate UI panels */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100/50 relative">
            {success && (
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-emerald-50 text-emerald-600 border border-emerald-100 px-3 py-1.5 rounded-xl text-[10px] font-bold shadow-sm animate-in fade-in slide-in-from-top-1 duration-200">
                <FiCheck />
                <span>Saved</span>
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-4">
              {/* Initials profile header */}
              <div className="flex flex-col items-center gap-2 pb-4 border-b border-slate-100 mb-2">
                <div className="h-16 w-16 bg-indigo-50 border border-indigo-100 text-indigo-600 font-extrabold text-xl rounded-full flex items-center justify-center shadow-inner">
                  {profileData.fullName.split(" ").map(w => w[0]).join("")}
                </div>
                <div className="text-center">
                  <h3 className="text-xs font-bold text-slate-800">{profileData.fullName}</h3>
                  <p className="text-[10px] text-slate-400 font-semibold">{profileData.role} — {profileData.orgRole}</p>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className={labelStyle}>Full Name</label>
                <div className="relative">
                  <FiUser className="absolute left-3.5 top-3.5 text-slate-400 text-xs" />
                  <input
                    type="text"
                    name="fullName"
                    value={profileData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Connor"
                    className={`${inputStyle} pl-9`}
                    required
                  />
                </div>
              </div>

              {/* Job Role */}
              <div>
                <label className={labelStyle}>Job Role</label>
                <div className="relative">
                  <FiBriefcase className="absolute left-3.5 top-3.5 text-slate-400 text-xs" />
                  <input
                    type="text"
                    name="role"
                    value={profileData.role}
                    onChange={handleChange}
                    placeholder="e.g. Senior Recruiter"
                    className={`${inputStyle} pl-9`}
                    required
                  />
                </div>
              </div>

              {/* Organization Role */}
              <div>
                <label className={labelStyle}>Organization Role</label>
                <div className="relative">
                  <FiAlertCircle className="absolute left-3.5 top-3.5 text-slate-400 text-xs" />
                  <input
                    type="text"
                    name="orgRole"
                    value={profileData.orgRole}
                    onChange={handleChange}
                    placeholder="e.g. Talent Acquisition Partner"
                    className={`${inputStyle} pl-9`}
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-3 border-t border-slate-100">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition hover:scale-[1.01] active:scale-95 cursor-pointer"
                >
                  Save Settings
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
