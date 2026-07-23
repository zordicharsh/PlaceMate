import {BrowserRouter,Route,Routes} from "react-router-dom";



import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CandidateRegister from "./pages/CandidateRegister";
import RecruiterRegister from "./pages/RecruiterRegister";
import Candidate from "./pages/dashborad/Candidate";
import Recruiter from "./pages/dashborad/Recruiter";


function App() {
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/candidate" element={<CandidateRegister />} />
        <Route path="/register/recruiter" element={<RecruiterRegister />} />
        <Route path="/dashboard/candidate" element={<Candidate/>}/>
        <Route path="/dashboard/recruiter" element={<Recruiter/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;