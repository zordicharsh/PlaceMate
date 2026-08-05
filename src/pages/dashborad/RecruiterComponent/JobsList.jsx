import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiBriefcase, FiTrash2, FiEdit2, FiPlus } from "react-icons/fi";
import axios from "axios";

export default function JobsList({ jobsData, onToggleStatus, onDeleteJob }) {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState(jobsData || []);
  const [loading, setLoading] = useState(!jobsData);

  useEffect(() => {
    if (jobsData) return;
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/api/recruiter/jobs",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        if (response.data.success) {
          const mappedJobs = response.data.jobs.map((item) => ({
            id: item.id,
            title: item.job_title,
            location: item.location,
            mode: item.work_mode,
            type: item.job_type,
            vacancies: item.vacancies,
            applicants: 0,
            posted: new Date(item.created_at || Date.now()).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric"
            }),
            status: item.status === "open" ? "Active" : "Closed"
          }));
          setJobs(mappedJobs);
        }
      } catch (error) {
        console.error("Error fetching recruiter jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [jobsData]);

  const handleToggleStatus = async (id) => {
    const jobToUpdate = jobs.find((j) => j.id === id);
    if (!jobToUpdate) return;
    
    const newUIStatus = jobToUpdate.status === "Active" ? "Closed" : "Active";
    const newDBStatus = newUIStatus === "Active" ? "open" : "closed";

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:5000/api/recruiter/jobs/${id}`,
        { status: newDBStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.data.success) {
        setJobs((prevJobs) =>
          prevJobs.map((j) => (j.id === id ? { ...j, status: newUIStatus } : j))
        );
        if (onToggleStatus) onToggleStatus(id);
      }
    } catch (error) {
      console.error("Error toggling status:", error);
      alert("Failed to toggle job status");
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this job posting?")) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.delete(
          `http://localhost:5000/api/recruiter/jobs/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        if (response.data.success) {
          setJobs((prevJobs) => prevJobs.filter((j) => j.id !== id));
          if (onDeleteJob) onDeleteJob(id);
        }
      } catch (error) {
        console.error("Error deleting job:", error);
        alert("Failed to delete job");
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="space-y-6">
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
        <div className="bg-white border border-slate-200 rounded-xl p-8 text-center shadow-sm">
          <FiBriefcase className="mx-auto text-slate-300 mb-3" size={32} />
          <h3 className="text-sm font-bold text-slate-700">No Job Openings</h3>
          <p className="text-slate-400 text-xs mt-1">Get started by creating your first job listing.</p>
          <button
            onClick={() => navigate("/recruiter/post-job")}
            className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition cursor-pointer"
          >
            Create Job
          </button>
        </div>
      </div>
    );
  }

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
