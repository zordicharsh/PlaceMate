import { useState } from "react";
import { FiBriefcase, FiMapPin, FiDollarSign, FiCalendar, FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function JobPostForm() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    jobType: "Full-time",
    workMode: "Hybrid",
    location: "",
    salaryMin: "",
    salaryMax: "",
    experience: "",
    skills: "", // Comma-separated skills
    vacancies: "",
    applicationDeadline: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePostJob = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  const resetForm = () => {
    setFormData({
      jobTitle: "",
      jobDescription: "",
      jobType: "Full-time",
      workMode: "Hybrid",
      location: "",
      salaryMin: "",
      salaryMax: "",
      experience: "",
      skills: "",
      vacancies: "",
      applicationDeadline: "",
    });
    setSuccess(false);
  };

  // Easy-to-edit Tailwind style classes
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
          The listing for <span className="text-slate-700 font-bold">{formData.jobTitle || "the position"}</span> has been published.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={resetForm}
            className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-xs rounded-xl transition cursor-pointer"
          >
            Post Another Job
          </button>
          <button
            onClick={() => navigate("/dashboard/recruiter")}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition cursor-pointer"
          >
            View Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm max-w-3xl mx-auto overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Form Header */}
      <div className="px-6 py-4.5 border-b border-slate-100">
        <h1 className="text-base font-bold text-slate-800">Post a Job Opening</h1>
        <p className="text-slate-400 text-[10px] mt-0.5">Publish a new job listing to source potential talent.</p>
      </div>

      {/* Form Content */}
      <form onSubmit={handlePostJob} className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Job Details */}
          <div className="space-y-4">
            {/* Job Title */}
            <div>
              <label className={labelStyle}>Job Title</label>
              <div className="relative">
                <FiBriefcase className="absolute left-3.5 top-3.5 text-slate-400 text-xs" />
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="e.g. Senior Frontend Engineer"
                  className={`${inputStyle} pl-9`}
                  required
                />
              </div>
            </div>

            {/* Job Description */}
            <div>
              <label className={labelStyle}>Job Description</label>
              <textarea
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                placeholder="Describe responsibilities, day-to-day duties, and required criteria..."
                rows={5}
                className={`${inputStyle} resize-none leading-relaxed`}
                required
              />
            </div>

            {/* Required Skills (Simple string comma-separated) */}
            <div>
              <label className={labelStyle}>Required Skills (Comma Separated)</label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="e.g. React, Node.js, TypeScript, Git"
                className={inputStyle}
                required
              />
            </div>
          </div>

          {/* Right Column: Specifications & Criteria */}
          <div className="space-y-4">
            {/* Job Type & Work Mode */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>Job Type</label>
                <select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  className={inputStyle}
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div>
                <label className={labelStyle}>Work Mode</label>
                <select
                  name="workMode"
                  value={formData.workMode}
                  onChange={handleChange}
                  className={inputStyle}
                >
                  <option value="On-site">On-site</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className={labelStyle}>Location</label>
              <div className="relative">
                <FiMapPin className="absolute left-3.5 top-3.5 text-slate-400 text-xs" />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. San Francisco, CA (or 'Remote')"
                  className={`${inputStyle} pl-9`}
                  required
                />
              </div>
            </div>

            {/* Salary Range */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>Min Salary ($/yr)</label>
                <div className="relative">
                  <FiDollarSign className="absolute left-3 top-3.5 text-slate-400 text-xs" />
                  <input
                    type="number"
                    name="salaryMin"
                    value={formData.salaryMin}
                    onChange={handleChange}
                    placeholder="e.g. 70000"
                    className={`${inputStyle} pl-7`}
                    required
                  />
                </div>
              </div>
              <div>
                <label className={labelStyle}>Max Salary ($/yr)</label>
                <div className="relative">
                  <FiDollarSign className="absolute left-3 top-3.5 text-slate-400 text-xs" />
                  <input
                    type="number"
                    name="salaryMax"
                    value={formData.salaryMax}
                    onChange={handleChange}
                    placeholder="e.g. 100000"
                    className={`${inputStyle} pl-7`}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Experience & Vacancies */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>Experience Required</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g. 2+ years"
                  className={inputStyle}
                  required
                />
              </div>
              <div>
                <label className={labelStyle}>No. of Openings</label>
                <input
                  type="number"
                  name="vacancies"
                  value={formData.vacancies}
                  onChange={handleChange}
                  placeholder="e.g. 3"
                  className={inputStyle}
                  required
                />
              </div>
            </div>

            {/* Application Deadline */}
            <div>
              <label className={labelStyle}>Application Deadline</label>
              <div className="relative">
                <FiCalendar className="absolute left-3.5 top-3.5 text-slate-400 text-xs" />
                <input
                  type="date"
                  name="applicationDeadline"
                  value={formData.applicationDeadline}
                  onChange={handleChange}
                  className={`${inputStyle} pl-9`}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form Footer Controls */}
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
            Publish Job listing
          </button>
        </div>
      </form>
    </div>
  );
}
