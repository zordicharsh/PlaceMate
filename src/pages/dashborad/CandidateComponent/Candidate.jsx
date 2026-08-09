import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";


export default function CandidateDashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8 overflow-y-auto max-h-screen">
        <main className="mt-8">
          {/* Child pages appear here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}