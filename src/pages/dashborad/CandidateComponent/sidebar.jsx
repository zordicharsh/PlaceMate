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

const menuItems = [
  { icon: <FaHome />, name: "Dashboard" },
  { icon: <FaUser />, name: "My Profile" },
  { icon: <FaBriefcase />, name: "Jobs" },
  { icon: <FaFileAlt />, name: "Applications" },
  { icon: <FaCode />, name: "Coding Practice" },
  { icon: <FaCalendarAlt />, name: "Interviews" },
  { icon: <FaComments />, name: "Messages" },
  { icon: <FaCog />, name: "Settings" },
];

export default function Sidebar() {
  return (
    <div className="w-72 bg-slate-900 text-white min-h-screen flex flex-col justify-between">

      <div>

        <div className="p-8 border-b border-slate-700">

          <h1 className="text-3xl font-bold text-indigo-400">
            PlaceMate
          </h1>

          <p className="text-slate-400 text-sm mt-2">
            Student Dashboard
          </p>

        </div>

        <div className="mt-8">

          {menuItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 px-8 py-4 cursor-pointer hover:bg-indigo-600 transition duration-300"
            >
              <span className="text-lg">{item.icon}</span>

              <span className="font-medium">
                {item.name}
              </span>
            </div>
          ))}

        </div>

      </div>

      <div className="border-t border-slate-700">

        <div className="flex items-center gap-4 px-8 py-5 hover:bg-red-600 cursor-pointer transition">

          <FaSignOutAlt />

          Logout

        </div>

      </div>

    </div>
  );
}