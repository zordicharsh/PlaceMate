export default function ProfileProgress() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-xl font-bold mb-6">
        Profile Completion
      </h2>

      <div className="w-full bg-gray-200 rounded-full h-4">

        <div
          className="bg-indigo-600 h-4 rounded-full"
          style={{ width: "70%" }}
        ></div>

      </div>

      <p className="mt-4 text-slate-600">
        70% Completed
      </p>

      <button className="mt-6 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
        Complete Profile
      </button>

    </div>
  );
}