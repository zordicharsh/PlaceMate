import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CandidateRegister from "./pages/CandidateRegister";
import RecruiterRegister from "./pages/RecruiterRegister";
import CandidateOnboarding from "./pages/dashborad/CandidateComponent/CandidateOnboarding";

// Recruiter Pages
import RecruiterDashboard from "./pages/dashborad/RecruiterComponent/RecruiterDashboard";
import PostJob from "./pages/dashborad/RecruiterComponent/PostJob";
import Applicants from "./pages/dashborad/RecruiterComponent/Applicants";
import MyJobs from "./pages/dashborad/RecruiterComponent/MyJobs";
import ProfileSettings from "./pages/dashborad/RecruiterComponent/ProfileSettings";
import GetJob from "./pages/dashborad/CandidateComponent/GetJob";
import CandidateDashboard from "./pages/dashborad/CandidateComponent/Candidate";
import DashboardHome from "./pages/dashborad/CandidateComponent/DashboardHome";
import ComingSoon from "./pages/dashborad/CandidateComponent/ComingSoon";

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
        <Route path="/dashboard/candidate" element={<CandidateDashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="get-job" element={<GetJob />} />
          <Route path="profile" element={<ComingSoon title="My Profile" />} />
          <Route path="applications" element={<ComingSoon title="Applications" />} />
          <Route path="coding" element={<ComingSoon title="Coding Practice" />} />
          <Route path="interviews" element={<ComingSoon title="Interviews" />} />
          <Route path="messages" element={<ComingSoon title="Messages" />} />
          <Route path="settings" element={<ComingSoon title="Settings" />} />
        </Route>
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