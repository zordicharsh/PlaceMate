import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiBriefcase, FiTrash2, FiEdit2, FiPlus } from "react-icons/fi";

export default function JobsList({ jobsData, onToggleStatus, onDeleteJob }) {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState(jobsData || [
    { id: 1, title: "Senior Frontend Engineer", location: "San Francisco, CA", mode: "Remote", type: "Full-time", posted: "May 10, 2026", applicants: 24, status: "Active", vacancies: 2 },
    { id: 2, title: "React Developer", location: "Bangalore, India", mode: "Hybrid", type: "Full-time", posted: "May 15, 2026", applicants: 48, status: "Active", vacancies: 3 },
    { id: 3, title: "Lead Systems Architect", location: "Austin, TX", mode: "On-site", type: "Full-time", posted: "May 08, 2026", applicants: 12, status: "Active", vacancies: 1 },
    { id: 4, title: "UI/UX Designer", location: "New York, NY", mode: "Remote", type: "Contract", posted: "Apr 28, 2026", applicants: 19, status: "Closed", vacancies: 1 },
    { id: 5, title: "NodeJS Backend Engineer", location: "London, UK", mode: "Hybrid", type: "Full-time", posted: "May 02, 2026", applicants: 32, status: "Active", vacancies: 2 }
  ]);

  const handleToggleStatus = (id) => {
    const updated = jobs.map((job) => {
      if (job.id === id) {
        const nextStatus = job.status === "Active" ? "Closed" : "Active";
        return { ...job, status: nextStatus };
      }
      return job;
    });
    setJobs(updated);
    if (onToggleStatus) onToggleStatus(id);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this job posting?")) {
      const filtered = jobs.filter((job) => job.id !== id);
      setJobs(filtered);
      if (onDeleteJob) onDeleteJob(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-800">Job Listings</h1>
          <p className="text-slate-400 text-xs mt-0.5">Create, manage, and toggle the status of company job openings.</p>
        </div>
        <button
          onClick={() => navigate("/recruiter/post-job")}
          className="flex items-center justify-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition cursor-pointer"
        >
          <FiPlus /> Add Job
        </button>
      </div>

      {/* Grid of Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className={`bg-white border rounded-xl p-4 transition shadow-sm flex flex-col justify-between ${
              job.status === "Active" ? "border-slate-200" : "border-slate-200/50 opacity-70"
            }`}
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="p-2 bg-slate-50 border border-slate-200 text-slate-500 rounded-lg">
                  <FiBriefcase size={15} />
                </div>
                <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                  job.status === "Active" 
                    ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                    : "bg-slate-50 text-slate-400 border-slate-200"
                }`}>
                  {job.status}
                </span>
              </div>

              <h3 className="text-xs font-bold text-slate-800 truncate">{job.title}</h3>
              
              <div className="flex items-center gap-1 text-[9px] text-slate-400 font-semibold mt-0.5">
                <span>{job.location}</span>
                <span>•</span>
                <span>{job.mode}</span>
              </div>

              <div className="flex gap-1.5 my-3">
                <span className="text-[9px] font-bold text-slate-500 bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded">
                  {job.type}
                </span>
                <span className="text-[9px] font-bold text-slate-500 bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded">
                  {job.vacancies} openings
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-2 py-2 border-t border-b border-slate-100 text-[9px] text-slate-400 font-semibold mb-3">
                <div>
                  <span className="text-slate-600 font-bold block text-xs">{job.applicants}</span>
                  <span>Applicants</span>
                </div>
                <div>
                  <span className="text-slate-600 font-bold block text-xs">{job.posted}</span>
                  <span>Posted Date</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleToggleStatus(job.id)}
                  className={`w-8 h-4.5 rounded-full p-0.5 transition cursor-pointer ${
                    job.status === "Active" ? "bg-indigo-600" : "bg-slate-200"
                  }`}
                >
                  <div className={`w-3.5 h-3.5 bg-white rounded-full shadow transition transform ${
                    job.status === "Active" ? "translate-x-3.5" : "translate-x-0"
                  }`} />
                </button>
                <span className="text-[9px] font-bold text-slate-400">
                  {job.status === "Active" ? "Open" : "Closed"}
                </span>
              </div>

              <div className="flex gap-1">
                <button
                  className="p-1 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded transition"
                  title="Edit"
                >
                  <FiEdit2 size={12} />
                </button>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="p-1 text-slate-400 hover:text-rose-500 hover:bg-slate-50 rounded transition"
                  title="Delete"
                >
                  <FiTrash2 size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
