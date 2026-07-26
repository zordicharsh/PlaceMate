import {
  FaBriefcase,
  FaUsers,
  FaClipboardCheck,
  FaCalendarAlt,
} from "react-icons/fa";

const stats = [
  {
    title: "Active Jobs",
    value: 12,
    icon: <FaBriefcase />,
    color: "bg-blue-500",
  },
  {
    title: "Total Candidates",
    value: 348,
    icon: <FaUsers />,
    color: "bg-purple-500",
  },
  {
    title: "Shortlisted",
    value: 42,
    icon: <FaClipboardCheck />,
    color: "bg-green-500",
  },
  {
    title: "Interviews Today",
    value: 6,
    icon: <FaCalendarAlt />,
    color: "bg-orange-500",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-2xl shadow-md p-6 border border-slate-100/50"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 text-sm font-semibold">{item.title}</p>
              <h2 className="text-3xl font-bold text-slate-800 mt-1">{item.value}</h2>
            </div>
            <div
              className={`${item.color} h-14 w-14 rounded-xl flex items-center justify-center text-white text-xl shadow-md`}
            >
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
