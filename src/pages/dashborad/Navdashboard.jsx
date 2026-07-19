export default function NavDashboard() {
    const navLinks = [
        "Dashboard",
        "Post Job",
        "Manage Jobs",
        "Applicants",
        "Interviews",
        "Company",
    ];

    return (
        <nav className="flex items-center justify-between bg-[#18181b] border border-slate-800   px-8 py-4 text-white shadow-lg">

            {/* Left */}
            <div className="flex items-center gap-10">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-purple-500">
                    PlaceMate
                </h1>

                {/* Links */}
                <div className="flex gap-8 text-gray-300">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className=" px-4 py-2 border border-transparent rounded-lg transition-all duration-250 hover:border-purple-500 hover:text-purple-300 hover:scale-110"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-5">




                {/* Profile */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <img
                        src="https://i.pravatar.cc/100"
                        alt="profile"
                        className="w-10 h-10 rounded-full border-2 border-purple-500"
                    />

                    <div>
                        <h3 className="font-semibold text-white">
                            TechCorp
                        </h3>

                        <p className="text-xs text-gray-400">
                            Recruiter
                        </p>
                    </div>
                </div>

                {/* Logout */}
                <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-xl transition">
                    Logout
                </button>

            </div>
        </nav>
    );
}