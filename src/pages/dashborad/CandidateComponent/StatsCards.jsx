import {
  FaBriefcase,
  FaBookmark,
  FaClipboardCheck,
  FaCalendarAlt,
} from "react-icons/fa";

const stats = [
  {
    title: "Applied Jobs",
    value: 12,
    icon: <FaBriefcase />,
    color: "bg-blue-500",
  },
  {
    title: "Saved Jobs",
    value: 18,
    icon: <FaBookmark />,
    color: "bg-green-500",
  },
  {
    title: "Assessments",
    value: 5,
    icon: <FaClipboardCheck />,
    color: "bg-purple-500",
  },
  {
    title: "Interviews",
    value: 2,
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
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <div className="flex justify-between items-center">
            <div>
              <p>{item.title}</p>
              <h2 className="text-3xl font-bold">{item.value}</h2>
            </div>

            <div
              className={`${item.color} h-14 w-14 rounded-xl flex items-center justify-center text-white`}
            >
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}