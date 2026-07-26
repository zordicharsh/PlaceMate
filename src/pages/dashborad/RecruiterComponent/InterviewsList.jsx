import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function InterviewsList() {
  const navigate = useNavigate();

  const interviews = [
    { id: 1, name: "Marcus Thompson", role: "Lead Architect", time: "10:30 AM", type: "Technical Round" },
    { id: 2, name: "Alisha Patel", role: "Product Manager", time: "02:00 PM", type: "HR Screening" },
    { id: 3, name: "John Doe", role: "DevOps Lead", time: "04:30 PM", type: "System Design" },
  ];

  return (
    <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
        <div>
          <h2 className="text-sm font-bold text-slate-800">Interviews Today</h2>
          <span className="text-[10px] text-slate-400 font-semibold">Scheduled timeframes</span>
        </div>
        <button
          onClick={() => navigate("/recruiter/applicants")}
          className="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition cursor-pointer flex items-center gap-1"
          title="View candidates"
        >
          View <FiArrowRight />
        </button>
      </div>

      <div className="space-y-3">
        {interviews.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 p-2.5 rounded-lg border border-slate-100 hover:bg-slate-50/50 transition duration-150"
          >
            <div className="bg-indigo-50/50 border border-indigo-100/50 text-indigo-600 text-[10px] font-bold px-2 py-1 rounded text-center min-w-16">
              {item.time}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-bold text-slate-700 truncate">{item.name}</h3>
              <p className="text-[9px] text-slate-400 font-medium truncate mt-0.5">{item.role}</p>
              <span className="inline-block mt-1 text-[8px] font-bold text-slate-400 uppercase tracking-wider">
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
