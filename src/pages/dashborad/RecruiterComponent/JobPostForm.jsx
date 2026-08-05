import { useState } from "react";
import { FiBriefcase, FiMapPin, FiDollarSign, FiCalendar, FiCheckCircle, FiBook, FiAward, FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function JobPostForm() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const getRecruiterId = () => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      return user.id || "";
    } catch {
      return "";
    }
  };

  const initialForm = {
    recruiter_id: getRecruiterId(),
    job_title: "",
    job_description: "",
    job_type: "Full-time",
    work_mode: "Hybrid",
    location: "",
    salary: "",
    experience_years: "",
    required_skills: "",
    vacancies: "",
    application_deadline: "",
    status: "open",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePostJob = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/recruiter/createjob",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error posting job:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to post job. Please try again.");
    }
  };


  const resetForm = () => {
    setFormData({ ...initialForm, recruiter_id: getRecruiterId() });
    setSuccess(false);
  };

  const inputStyle = "w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 text-slate-700 placeholder-slate-400 transition text-xs font-semibold";
  const labelStyle = "block text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1";

  if (success) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-8 max-w-md mx-auto text-center shadow-sm">
        <div className="h-14 w-14 bg-emerald-50 text-emerald-500 border border-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FiCheckCircle size={28} />
        </div>
        <h2 className="text-base font-bold text-slate-800">Job Posted Successfully!</h2>
        <p className="text-slate-400 text-xs mt-1.5 max-w-xs mx-auto">
          The listing for <span className="text-slate-700 font-bold">{formData.job_title || "the position"}</span> has been published.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={resetForm} className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-xs rounded-xl transition cursor-pointer">
            Post Another Job
          </button>
          <button onClick={() => navigate("/dashboard/recruiter")} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition cursor-pointer">
            View Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm max-w-3xl mx-auto overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="px-6 py-4.5 border-b border-slate-100">
        <h1 className="text-base font-bold text-slate-800">Post a Job Opening</h1>
        <p className="text-slate-400 text-[10px] mt-0.5">Publish a new job listing to source potential talent.</p>
      </div>

      <form onSubmit={handlePostJob} className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Job Details */}
          <div className="space-y-4">
            <div>
              <label className={labelStyle}>Job Title</label>
              <div className="relative">
                <FiBriefcase className="absolute left-3.5 top-3.5 text-slate-400 text-xs" />
                <input
                  type="text"
                  name="job_title"
                  value={formData.job_title}
                  onChange={handleChange}
                  placeholder="e.g. Senior Frontend Engineer"
                  className={`${inputStyle} pl-9`}
                  required
                />
              </div>
            </div>

            <div>
              <label className={labelStyle}>Job Description</label>
              <textarea
                name="job_description"
                value={formData.job_description}
                onChange={handleChange}
                placeholder="Describe responsibilities, criteria..."
                rows={4}
                className={`${inputStyle} resize-none leading-relaxed`}
                required
              />
            </div>

            <div>
              <label className={labelStyle}>Required Skills (Comma Separated)</label>
              <div className="relative">
                <FiBook className="absolute left-3.5 top-3.5 text-slate-400 text-xs" />
                <input
                  type="text"
                  name="required_skills"
                  value={formData.required_skills}
                  onChange={handleChange}
                  placeholder="e.g. React, Node.js, TypeScript"
                  className={`${inputStyle} pl-9`}
                  required
                />
              </div>
            </div>
          </div>

          {/* Right Column: Specifications */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>Job Type</label>
                <select name="job_type" value={formData.job_type} onChange={handleChange} className={inputStyle}>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div>
                <label className={labelStyle}>Work Mode</label>
                <select name="work_mode" value={formData.work_mode} onChange={handleChange} className={inputStyle}>
                  <option value="On-site">On-site</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>Salary ($/yr)</label>
                <div className="relative">
                  <FiDollarSign className="absolute left-3 top-3.5 text-slate-400 text-xs" />
                  <input
                    type="number"
                    name="salary"
                    value={formData.salary}
                    onChange={handleChange}
                    placeholder="e.g. 95000"
                    className={`${inputStyle} pl-7`}
                    required
                  />
                </div>
              </div>
              <div>
                <label className={labelStyle}>Experience (Years)</label>
                <div className="relative">
                  <FiAward className="absolute left-3 top-3.5 text-slate-400 text-xs" />
                  <input
                    type="number"
                    name="experience_years"
                    value={formData.experience_years}
                    onChange={handleChange}
                    placeholder="e.g. 3"
                    className={`${inputStyle} pl-7`}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>No. of Openings</label>
                <div className="relative">
                  <FiUsers className="absolute left-3 top-3.5 text-slate-400 text-xs" />
                  <input
                    type="number"
                    name="vacancies"
                    value={formData.vacancies}
                    onChange={handleChange}
                    placeholder="e.g. 2"
                    className={`${inputStyle} pl-7`}
                    required
                  />
                </div>
              </div>
              <div>
                <label className={labelStyle}>Status</label>
                <select name="status" value={formData.status} onChange={handleChange} className={inputStyle}>
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className={labelStyle}>Location</label>
                <div className="relative">
                  <FiMapPin className="absolute left-3.5 top-3.5 text-slate-400 text-xs" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. San Francisco, CA"
                    className={`${inputStyle} pl-9`}
                    required
                  />
                </div>
              </div>
              <div className="col-span-1">
                <label className={labelStyle}>Deadline</label>
                <div className="relative">
                  <FiCalendar className="absolute left-3.5 top-3.5 text-slate-400 text-xs" />
                  <input
                    type="date"
                    name="application_deadline"
                    value={formData.application_deadline}
                    onChange={handleChange}
                    className={`${inputStyle} pl-9`}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
          <button
            type="button"
            onClick={resetForm}
            className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-500 font-bold text-xs rounded-xl transition cursor-pointer"
          >
            Reset Form
          </button>
          <button
            type="submit"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition hover:scale-[1.01] active:scale-95 cursor-pointer"
          >
            Publish Job Listing
          </button>
        </div>
      </form>
    </div>
  );
}
