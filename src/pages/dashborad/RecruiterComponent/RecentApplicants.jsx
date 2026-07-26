import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function RecentApplicants() {
  const navigate = useNavigate();

  const applicants = [
    { id: 1, name: "Alexander Wright", role: "Senior Frontend Engineer", score: 96, date: "Today", status: "Shortlisted", avatar: "AW" },
    { id: 2, name: "Priya Sharma", role: "React Developer", score: 88, date: "Yesterday", status: "Applied", avatar: "PS" },
    { id: 3, name: "Marcus Thompson", role: "Lead Architect", score: 92, date: "2 days ago", status: "Interviewing", avatar: "MT" },
    { id: 4, name: "Sophia Martinez", role: "UI/UX Designer", score: 79, date: "3 days ago", status: "Rejected", avatar: "SM" },
    { id: 5, name: "David Kim", role: "Fullstack Engineer", score: 91, date: "4 days ago", status: "Applied", avatar: "DK" },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Applied":
        return <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-100/50">Applied</span>;
      case "Shortlisted":
        return <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 border border-indigo-100/50">Shortlisted</span>;
      case "Interviewing":
        return <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-600 border border-amber-100/50">Interviewing</span>;
      case "Hired":
        return <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-100/50">Hired</span>;
      case "Rejected":
        return <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-600 border border-rose-100/50">Rejected</span>;
      default:
        return <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">{status}</span>;
    }
  };

  return (
    <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
        <div>
          <h2 className="text-sm font-bold text-slate-800">Recent Applications</h2>
          <span className="text-[10px] text-slate-400 font-semibold">Latest profiles received across all departments</span>
        </div>
        <button
          onClick={() => navigate("/recruiter/applicants")}
          className="text-xs font-bold text-indigo-600 hover:text-indigo-700 transition cursor-pointer flex items-center gap-1"
        >
          View All <FiArrowRight />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Candidate</th>
              <th className="pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Applied Position</th>
              <th className="pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Fit Score</th>
              <th className="pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Date</th>
              <th className="pb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {applicants.map((candidate) => (
              <tr key={candidate.id} className="hover:bg-slate-50/50 transition">
                <td className="py-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="h-7 w-7 rounded bg-indigo-50 border border-indigo-100/50 text-indigo-600 font-bold text-[10px] flex items-center justify-center">
                      {candidate.avatar}
                    </div>
                    <span className="text-xs font-bold text-slate-700">{candidate.name}</span>
                  </div>
                </td>
                <td className="py-2.5">
                  <span className="text-xs font-medium text-slate-500">{candidate.role}</span>
                </td>
                <td className="py-2.5 text-center">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100/40 text-[10px] font-bold">
                    {candidate.score}%
                  </span>
                </td>
                <td className="py-2.5">
                  <span className="text-xs font-medium text-slate-400">{candidate.date}</span>
                </td>
                <td className="py-2.5">
                  {getStatusBadge(candidate.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
