import {BrowserRouter,Route,Routes} from "react-router-dom";



import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobseeker from "./pages/dashborad/Jobseeker";
import Jobgiver from "./pages/dashborad/jobgiver";


function App() {
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/jobseeker" element={<Jobseeker/>}/>
        <Route path="/dashboard/jobgiver" element={<Jobgiver/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;