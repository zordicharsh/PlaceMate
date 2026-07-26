import { useState } from "react";
import { FiSearch, FiMail, FiPhone, FiExternalLink, FiX, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

export default function ApplicantsList({ applicantsData }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedCandidate, setSelectedCandidate] = useState(null); // resume modal trigger

  const [candidates, setCandidates] = useState(applicantsData || [
    {
      id: 1,
      name: "Alexander Wright",
      role: "Senior Frontend Engineer",
      score: 96,
      date: "May 24, 2026",
      status: "Shortlisted",
      email: "alexander.wright@gmail.com",
      phone: "+1 (555) 019-2834",
      experience: "5 years",
      education: "M.Tech in CS (GPA 8.9)",
      skills: ["React", "TypeScript", "TailwindCSS", "Next.js", "Redux"],
      resume: {
        experienceList: [
          { company: "Innotech Solutions", role: "Frontend Lead", duration: "2024 - Present", desc: "Led a team of 4 devs to migrate legacy platform to Next.js, boosting speed by 40%." },
          { company: "Quantum Tech", role: "Software Engineer", duration: "2021 - 2024", desc: "Built reusable UI component library in TailwindCSS used across 6 products." }
        ],
        projects: [
          { title: "SaaS Analytics Dashboard", tech: "React, D3.js", desc: "Designed customizable business intelligence graphs handling real-time data streams." }
        ]
      }
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "React Developer",
      score: 88,
      date: "May 25, 2026",
      status: "Applied",
      email: "priya.sharma@outlook.com",
      phone: "+91 98765 43210",
      experience: "2 years",
      education: "B.Tech in Computer Science (GPA 8.5)",
      skills: ["React", "JavaScript", "HTML/CSS", "Git", "REST APIs"],
      resume: {
        experienceList: [
          { company: "AppVenture Labs", role: "Junior Web Developer", duration: "2024 - Present", desc: "Optimized application rendering, reducing initial payload sizing by 25%." }
        ],
        projects: [
          { title: "E-Commerce App", tech: "React, Firebase", desc: "Integrated payment gateways and context-based state management." }
        ]
      }
    },
    {
      id: 3,
      name: "Marcus Thompson",
      role: "Lead Architect",
      score: 92,
      date: "May 23, 2026",
      status: "Interviewing",
      email: "m.thompson@verizon.net",
      phone: "+1 (555) 012-7634",
      experience: "8 years",
      education: "B.S. in Software Engineering (GPA 3.9)",
      skills: ["System Design", "AWS", "NodeJS", "Kubernetes", "GraphQL"],
      resume: {
        experienceList: [
          { company: "Stellar Cloud Systems", role: "Principal Architect", duration: "2022 - Present", desc: "Engineered scalable cloud microservices reducing server overhead costs by 35%." },
          { company: "Innovate Labs", role: "Senior Developer", duration: "2018 - 2022", desc: "Deployed CI/CD pipelines automate testing, decreasing releases deployment errors." }
        ],
        projects: [
          { title: "Distributed Database Cluster", tech: "Golang, Kubernetes", desc: "Created multi-node replication database system holding high uptime requirements." }
        ]
      }
    },
    {
      id: 4,
      name: "Sophia Martinez",
      role: "UI/UX Designer",
      score: 79,
      date: "May 22, 2026",
      status: "Rejected",
      email: "sophia.martinez@designhub.co",
      phone: "+1 (555) 014-9988",
      experience: "3 years",
      education: "B.Des in Product Design",
      skills: ["Figma", "Adobe XD", "Design Systems", "Prototyping", "HTML/CSS"],
      resume: {
        experienceList: [
          { company: "Pixel Craft Studio", role: "Product Designer", duration: "2023 - Present", desc: "Redesigned landing web layouts, raising user sign-up conversions by 15%." }
        ],
        projects: [
          { title: "Fintech Mobile Application", tech: "Figma, User Testing", desc: "Executed wireframing and interactive prototypes based on usability feedback." }
        ]
      }
    },
    {
      id: 5,
      name: "David Kim",
      role: "Fullstack Engineer",
      score: 91,
      date: "May 21, 2026",
      status: "Applied",
      email: "david.kim@devmail.com",
      phone: "+1 (555) 016-4321",
      experience: "4 years",
      education: "M.S. in Computer Science",
      skills: ["React", "NodeJS", "MongoDB", "Express", "Docker"],
      resume: {
        experienceList: [
          { company: "CodeBase Technologies", role: "Full Stack Dev", duration: "2022 - Present", desc: "Architected user verification backend systems using JWT and bcrypt." }
        ],
        projects: [
          { title: "Collaborative Task Board", tech: "MERN Stack, Socket.io", desc: "Constructed real-time kanban collaboration boards for remote workspaces." }
        ]
      }
    }
  ]);

  const updateStatus = (id, newStatus) => {
    const updated = candidates.map(c => {
      if (c.id === id) {
        return { ...c, status: newStatus };
      }
      return c;
    });
    setCandidates(updated);
    if (selectedCandidate && selectedCandidate.id === id) {
      setSelectedCandidate({ ...selectedCandidate, status: newStatus });
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Applied":
        return "bg-blue-50 text-blue-600 border-blue-100";
      case "Shortlisted":
        return "bg-indigo-50 text-indigo-600 border-indigo-100";
      case "Interviewing":
        return "bg-amber-50 text-amber-600 border-amber-100";
      case "Hired":
        return "bg-emerald-50 text-emerald-600 border-emerald-100";
      case "Rejected":
        return "bg-rose-50 text-rose-600 border-rose-100";
      default:
        return "bg-slate-50 text-slate-600 border-slate-200";
    }
  };

  const filterTabs = ["All", "Applied", "Shortlisted", "Interviewing", "Hired", "Rejected"];

  const filteredCandidates = candidates.filter(c => {
    const matchesFilter = selectedFilter === "All" || c.status === selectedFilter;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-xl font-bold text-slate-800">Candidates Pipeline</h1>
        <p className="text-slate-400 text-xs mt-0.5">Filter applicants, review fit scores, and manage hiring stages.</p>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 w-full md:w-72 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/10 focus-within:border-indigo-500 transition-all">
          <FiSearch className="text-slate-400 text-xs" />
          <input
            type="text"
            placeholder="Search candidates, skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none text-slate-700 placeholder-slate-400 text-xs w-full font-medium"
          />
        </div>

        <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-xl">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                selectedFilter === tab
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of candidates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredCandidates.map((candidate) => (
          <div
            key={candidate.id}
            className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:border-slate-300 transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 bg-slate-50 border border-slate-200 text-indigo-600 rounded-lg font-bold flex items-center justify-center text-xs">
                    {candidate.name.split(" ").map(w => w[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-800">{candidate.name}</h3>
                    <p className="text-[10px] text-slate-400 font-semibold">{candidate.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${getStatusColor(candidate.status)} block w-fit ml-auto mb-1`}>
                    {candidate.status}
                  </span>
                  <span className="text-[9px] font-bold text-slate-400">Match: <span className="text-emerald-600 font-extrabold">{candidate.score}%</span></span>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 my-3">
                {candidate.skills.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-50 text-slate-500 border border-slate-100"
                  >
                    {skill}
                  </span>
                ))}
                {candidate.skills.length > 3 && (
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-50 text-slate-400">
                    +{candidate.skills.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-3 border-t border-slate-100 mt-2">
              <button
                onClick={() => setSelectedCandidate(candidate)}
                className="flex-1 py-1.5 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-[10px] rounded-lg transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <FiExternalLink />
                View Resume
              </button>

              <div className="flex gap-1">
                {candidate.status !== "Shortlisted" && candidate.status !== "Interviewing" && candidate.status !== "Hired" && (
                  <button
                    onClick={() => updateStatus(candidate.id, "Shortlisted")}
                    className="p-1.5 text-indigo-600 hover:bg-indigo-50 border border-indigo-100 rounded-lg transition cursor-pointer"
                    title="Shortlist"
                  >
                    <FiCheckCircle size={14} />
                  </button>
                )}
                {candidate.status === "Shortlisted" && (
                  <button
                    onClick={() => updateStatus(candidate.id, "Interviewing")}
                    className="px-2 py-1.5 text-amber-600 hover:bg-amber-50 border border-amber-100 rounded-lg text-[9px] font-bold transition cursor-pointer"
                  >
                    Schedule
                  </button>
                )}
                {candidate.status === "Interviewing" && (
                  <button
                    onClick={() => updateStatus(candidate.id, "Hired")}
                    className="px-2 py-1.5 text-emerald-600 hover:bg-emerald-50 border border-emerald-100 rounded-lg text-[9px] font-bold transition cursor-pointer"
                  >
                    Hire
                  </button>
                )}
                {candidate.status !== "Rejected" && candidate.status !== "Hired" && (
                  <button
                    onClick={() => updateStatus(candidate.id, "Rejected")}
                    className="p-1.5 text-rose-600 hover:bg-rose-50 border border-rose-100 rounded-lg transition cursor-pointer"
                    title="Reject"
                  >
                    <FiAlertCircle size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resume modal */}
      {selectedCandidate && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-150">
          <div className="bg-white border border-slate-200 rounded-xl w-full max-w-xl overflow-hidden shadow-xl flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="bg-slate-900 p-4 text-white flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold">{selectedCandidate.name}</h2>
                <p className="text-slate-400 text-[10px]">{selectedCandidate.role}</p>
              </div>
              <button
                onClick={() => setSelectedCandidate(null)}
                className="p-1 hover:bg-slate-800 rounded-lg transition cursor-pointer"
              >
                <FiX size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 space-y-4 overflow-y-auto flex-1 text-xs text-slate-600">
              <div className="flex justify-between items-center bg-slate-50 border border-slate-100 p-3 rounded-lg">
                <div className="space-y-1">
                  <p className="flex items-center gap-1.5 font-medium"><FiMail /> {selectedCandidate.email}</p>
                  <p className="flex items-center gap-1.5 font-medium"><FiPhone /> {selectedCandidate.phone}</p>
                </div>
                <div className="text-right">
                  <span className="text-[9px] text-slate-400 font-bold block uppercase">Fit Index</span>
                  <span className="text-2xl font-extrabold text-emerald-500">{selectedCandidate.score}%</span>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-[10px] font-bold text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-1 mb-2">Technical Skills</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCandidate.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 bg-slate-50 text-slate-600 font-semibold border border-slate-200 rounded text-[10px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h4 className="text-[10px] font-bold text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-1 mb-2">Experience</h4>
                <div className="space-y-3">
                  {selectedCandidate.resume.experienceList.map((exp, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between font-bold text-slate-700">
                        <span>{exp.role} at {exp.company}</span>
                        <span className="text-[10px] text-slate-400 font-semibold">{exp.duration}</span>
                      </div>
                      <p className="text-slate-400 leading-normal font-medium">{exp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="bg-slate-50 border-t border-slate-150 p-4 flex items-center justify-between text-xs">
              <span className="text-[10px] text-slate-400 font-bold">Status: <span className="text-indigo-600 font-extrabold uppercase">{selectedCandidate.status}</span></span>
              
              <div className="flex gap-2">
                {selectedCandidate.status !== "Rejected" && (
                  <button
                    onClick={() => updateStatus(selectedCandidate.id, "Rejected")}
                    className="px-3.5 py-1.5 border border-slate-200 hover:bg-rose-50 hover:text-rose-600 text-slate-500 font-bold rounded-lg transition cursor-pointer text-[10px]"
                  >
                    Reject
                  </button>
                )}
                {selectedCandidate.status !== "Shortlisted" && selectedCandidate.status !== "Interviewing" && selectedCandidate.status !== "Hired" && (
                  <button
                    onClick={() => updateStatus(selectedCandidate.id, "Shortlisted")}
                    className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition cursor-pointer text-[10px]"
                  >
                    Shortlist
                  </button>
                )}
                {selectedCandidate.status === "Shortlisted" && (
                  <button
                    onClick={() => updateStatus(selectedCandidate.id, "Interviewing")}
                    className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition cursor-pointer text-[10px]"
                  >
                    Schedule Interview
                  </button>
                )}
                {selectedCandidate.status === "Interviewing" && (
                  <button
                    onClick={() => updateStatus(selectedCandidate.id, "Hired")}
                    className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition cursor-pointer text-[10px]"
                  >
                    Hire Candidate
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
