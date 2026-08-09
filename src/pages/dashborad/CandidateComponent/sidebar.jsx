import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaFileAlt,
  FaCode,
  FaCalendarAlt,
  FaComments,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { icon: <FaHome />, name: "Dashboard", path: "/dashboard/candidate" },
  { icon: <FaUser />, name: "My Profile", path: "/dashboard/candidate/profile" },
  { icon: <FaBriefcase />, name: "Jobs", path: "/dashboard/candidate/get-job" },
  { icon: <FaFileAlt />, name: "Applications", path: "/dashboard/candidate/applications" },
  { icon: <FaCode />, name: "Coding Practice", path: "/dashboard/candidate/coding" },
  { icon: <FaCalendarAlt />, name: "Interviews", path: "/dashboard/candidate/interviews" },
  { icon: <FaComments />, name: "Messages", path: "/dashboard/candidate/messages" },
  { icon: <FaCog />, name: "Settings", path: "/dashboard/candidate/settings" },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userType");
    navigate("/login");
  };

  return (
    <div className="w-72 bg-slate-900 text-white min-h-screen flex flex-col justify-between shrink-0">
      <div>
        <div className="p-8 border-b border-slate-700">
          <h1 className="text-3xl font-bold text-indigo-400">
            PlaceMate
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Student Dashboard
          </p>
        </div>

        <div className="mt-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <div 
                onClick={() => navigate(item.path)}
                key={item.name}
                className={`flex items-center gap-4 px-8 py-4 cursor-pointer transition duration-300 ${
                  isActive ? "bg-indigo-600 text-white" : "text-slate-300 hover:bg-indigo-600 hover:text-white"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div 
          onClick={handleLogout}
          className="flex items-center gap-4 px-8 py-5 hover:bg-red-600 hover:text-white text-slate-300 cursor-pointer transition"
        >
          <FaSignOutAlt />
          Logout
        </div>
      </div>
    </div>
  );
}