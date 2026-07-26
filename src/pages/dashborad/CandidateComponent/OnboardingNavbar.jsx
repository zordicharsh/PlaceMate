export default function OnboardingNavbar() {
  return (
    <nav className="h-20 bg-white shadow-sm flex items-center justify-between px-10">

      <div className="flex items-center gap-3">

        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
          P
        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            PlaceMate
          </h2>

          <p className="text-sm text-slate-500">
            Find Your Dream Career
          </p>

        </div>

      </div>

      <h3 className="text-lg font-semibold text-slate-700">
        Welcome, Naman 👋
      </h3>

    </nav>
  );
}