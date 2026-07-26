import OnboardingNavbar from "./OnboardingNavbar";
import StepSidebar from "./StepSidebar";
import EducationForm from "./EducationForm";
export default function CandidateOnboarding() {
  return (
    <div className="min-h-screen bg-slate-50">

      <OnboardingNavbar />

      <div className="max-w-7xl mx-auto flex">

        <StepSidebar />

        <EducationForm />

      </div>

    </div>
  );
}