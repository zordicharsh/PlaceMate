import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaFileAlt,
  FaSignOutAlt,
} from "react-icons/fa";

export default function RecruiterSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: <FaHome />, name: "Dashboard", path: "/dashboard/recruiter" },
    { icon: <FaBriefcase />, name: "Post Job", path: "/recruiter/post-job" },
    { icon: <FaFileAlt />, name: "Applicants", path: "/recruiter/applicants" },
    { icon: <FaBriefcase />, name: "My Jobs", path: "/recruiter/my-jobs" },
    { icon: <FaUser />, name: "My Profile", path: "/recruiter/profile" },
  ];

  return (
    <div className="w-72 bg-slate-900 text-white min-h-screen flex flex-col justify-between">
      <div>
        {/* Brand Header */}
        <div className="p-8 border-b border-slate-700">
          <h1 className="text-3xl font-bold text-indigo-400">
            PlaceMate
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Recruiter Dashboard
          </p>
        </div>

        {/* Navigation Items */}
        <div className="mt-8">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <div
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-4 px-8 py-4 cursor-pointer transition duration-300 ${
                  isActive ? "bg-indigo-600" : "hover:bg-indigo-600"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Logout Footer Section */}
      <div className="border-t border-slate-700">
        <div 
          onClick={() => navigate("/login")}
          className="flex items-center gap-4 px-8 py-5 hover:bg-red-600 cursor-pointer transition"
        >
          <FaSignOutAlt />
          Logout
        </div>
      </div>
    </div>
  );
}