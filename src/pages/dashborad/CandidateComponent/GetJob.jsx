import { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";

const initialJobs = [
  {
    id: 1,
    title: "Frontend Developer (React)",
    company: "TechNova Solutions",
    location: "Bangalore, India",
    type: "Full-time",
    mode: "Hybrid",
    salary: "₹12 - ₹16 LPA",
    logoColor: "bg-indigo-600",
    skills: ["React", "JavaScript", "Tailwind CSS", "Redux"],
    posted: "1 day ago",
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "Google",
    location: "Hyderabad, India",
    type: "Internship",
    mode: "Office",
    salary: "₹60,000 / month",
    logoColor: "bg-red-500",
    skills: ["C++", "Java", "Data Structures", "Algorithms"],
    posted: "2 days ago",
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    company: "CloudScale Systems",
    location: "Remote (USA)",
    type: "Full-time",
    mode: "Remote",
    salary: "$90,000 - $120,000 / year",
    logoColor: "bg-emerald-500",
    skills: ["Node.js", "React", "PostgreSQL", "AWS"],
    posted: "Just now",
  },
  {
    id: 4,
    title: "Backend developer (Node.js)",
    company: "SprintPay",
    location: "Mumbai, India",
    type: "Contract",
    mode: "Remote",
    salary: "₹15 - ₹18 LPA",
    logoColor: "bg-purple-600",
    skills: ["Node.js", "Express", "MongoDB", "Redis"],
    posted: "3 days ago",
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "PixelPerfect Labs",
    location: "Pune, India",
    type: "Full-time",
    mode: "Hybrid",
    salary: "₹8 - ₹11 LPA",
    logoColor: "bg-pink-500",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    posted: "5 days ago",
  },
  {
    id: 6,
    title: "Data Analyst Intern",
    company: "FinSight Analytics",
    location: "Bangalore, India",
    type: "Internship",
    mode: "Office",
    salary: "₹30,000 / month",
    logoColor: "bg-amber-500",
    skills: ["Python", "SQL", "Tableau", "Excel"],
    posted: "4 days ago",
  },
];

export default function GetJob() {
  const [jobs, setJobs] = useState(initialJobs);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [appliedJobs, setAppliedJobs] = useState([]);

  // Handle job application
  const handleApply = (id) => {
    if (appliedJobs.includes(id)) return;
    setAppliedJobs([...appliedJobs, id]);
  };

  // Filter logic
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesType =
      selectedType === "All" ||
      job.type === selectedType ||
      (selectedType === "Remote" && job.mode === "Remote");

    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header section */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
          Explore Opportunities
        </h1>
        <p className="text-slate-500 mt-1">
          Apply to premium jobs matched specifically to your skills and interests.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
        <div className="relative flex-1">
          <FaSearch className="absolute left-4 top-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by role, company, or tech stack..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 text-slate-800 placeholder:text-slate-400"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0">
          {["All", "Full-time", "Internship", "Remote"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition duration-200 cursor-pointer whitespace-nowrap ${
                selectedType === type
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-100"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Jobs Grid */}
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {filteredJobs.map((job) => {
            const hasApplied = appliedJobs.includes(job.id);
            return (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Job Logo and Header Info */}
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex gap-4">
                      <div
                        className={`${job.logoColor} text-white font-bold h-12 w-12 rounded-xl flex items-center justify-center text-lg shadow-sm`}
                      >
                        {job.company.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h2 className="font-bold text-slate-800 text-lg hover:text-indigo-600 transition">
                          {job.title}
                        </h2>
                        <p className="text-slate-500 text-sm font-semibold mt-0.5">
                          {job.company}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                      {job.mode}
                    </span>
                  </div>

                  {/* Attributes */}
                  <div className="grid grid-cols-3 gap-2 mt-5 text-sm text-slate-500 font-medium">
                    <div className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-slate-400 shrink-0" />
                      <span className="truncate">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaBriefcase className="text-slate-400 shrink-0" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaMoneyBillWave className="text-emerald-500 shrink-0" />
                      <span className="truncate">{job.salary}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-slate-50 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Apply Row */}
                <div className="flex items-center justify-between border-t border-slate-50 mt-6 pt-4">
                  <span className="text-xs text-slate-400">
                    Posted {job.posted}
                  </span>
                  <button
                    onClick={() => handleApply(job.id)}
                    disabled={hasApplied}
                    className={`flex items-center gap-2 font-bold px-5 py-2.5 rounded-xl text-sm transition duration-200 cursor-pointer shadow-sm ${
                      hasApplied
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-100 cursor-default"
                        : "bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-[1.02] active:scale-95 shadow-indigo-100"
                    }`}
                  >
                    {hasApplied ? (
                      <>
                        <FaCheckCircle />
                        Applied
                      </>
                    ) : (
                      "Apply Now"
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm flex flex-col items-center justify-center min-h-[300px]">
          <p className="text-slate-400 text-lg font-medium">
            No jobs found matching your search.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedType("All");
            }}
            className="mt-4 text-indigo-600 font-bold hover:text-indigo-700"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}