import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CandidateRegister from "./pages/CandidateRegister";
import RecruiterRegister from "./pages/RecruiterRegister";
import CandidateOnboarding from "./pages/dashborad/CandidateComponent/CandidateOnboarding";
import Candidate from "./pages/dashborad/CandidateComponent/Candidate";

// Recruiter Pages
import RecruiterDashboard from "./pages/dashborad/RecruiterComponent/RecruiterDashboard";
import PostJob from "./pages/dashborad/RecruiterComponent/PostJob";
import Applicants from "./pages/dashborad/RecruiterComponent/Applicants";
import MyJobs from "./pages/dashborad/RecruiterComponent/MyJobs";
import ProfileSettings from "./pages/dashborad/RecruiterComponent/ProfileSettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/candidate" element={<CandidateRegister />} />
        <Route path="/register/recruiter" element={<RecruiterRegister />} />
        
        {/* Candidate Routes */}
        <Route path="/dashboard/candidate" element={<Candidate />} />
        <Route path="/dashboard/CandidateComponent/CandidateOnboarding" element={<CandidateOnboarding />} />
        
        {/* Recruiter Routes */}
        <Route path="/dashboard/recruiter" element={<RecruiterDashboard />} />
        <Route path="/recruiter/post-job" element={<PostJob />} />
        <Route path="/recruiter/applicants" element={<Applicants />} />
        <Route path="/recruiter/my-jobs" element={<MyJobs />} />
        <Route path="/recruiter/profile" element={<ProfileSettings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;