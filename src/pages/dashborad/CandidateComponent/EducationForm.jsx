import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaPercentage,
  FaBook,
} from "react-icons/fa";


export default function EducationForm() {
const navigate = useNavigate();

  const years = [];

  for (let i = 2035; i >= 1990; i--) {
    years.push(i);
  }

  const [formData, setFormData] = useState({
    qualification: "",
    course: "",
    specialization: "",
    university: "",
    educationType: "",
    currentStatus: "",
    startingYear: "",
    passingYear: "",
    cgpa: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid =
    formData.qualification &&
    formData.course &&
    formData.specialization &&
    formData.university &&
    formData.educationType &&
    formData.currentStatus &&
    formData.startingYear &&
    formData.passingYear &&
    formData.cgpa;

const handleSave = async () => {
  if (!isFormValid) return;

  try {
    const user = JSON.parse(localStorage.getItem("user"));

    await axios.put(
      "http://localhost:5000/api/user/complete-onboarding",
      {
        id: user.id,
      }
    );

    // Update local storage
    user.onboardingCompleted = true;

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    navigate("/dashboard/candidate");

  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="flex-1 bg-slate-100 min-h-screen py-10 px-10">

      {/* Progress */}

      <div className="mb-10">

        <div className="flex justify-between">

          <h2 className="text-2xl font-bold text-slate-800">
            Complete Your Profile
          </h2>

          <span className="text-blue-600 font-semibold">
            Step 2 of 3
          </span>

        </div>

        <div className="w-full h-3 bg-gray-300 rounded-full mt-4">

          <div className="w-1/4 h-3 bg-blue-600 rounded-full"></div>

        </div>

      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-10">

        <div className="flex items-center gap-4">

          <div className="bg-blue-100 p-4 rounded-full">

            <FaGraduationCap
              className="text-blue-600"
              size={30}
            />

          </div>

          <div>

            <h1 className="text-4xl font-bold text-slate-800">
              Education Details
            </h1>

            <p className="text-slate-500 mt-1">
              Tell recruiters about your educational background.
            </p>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-8 mt-12">

          {/* Qualification */}

          <div>

            <label className="font-semibold">
              Highest Qualification
            </label>

            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="w-full mt-2 h-12 rounded-xl border border-gray-300 px-4 focus:ring-4 focus:ring-blue-200 focus:border-blue-600 outline-none transition"
            >

              <option value="">
                Select Qualification
              </option>

              <option>10th</option>
              <option>12th</option>
              <option>Diploma</option>
              <option>BCA</option>
              <option>B.Tech</option>
              <option>B.Sc</option>
              <option>BBA</option>
              <option>MCA</option>
              <option>M.Tech</option>
              <option>MBA</option>
              <option>PhD</option>

            </select>

          </div>

          {/* Course */}

          <div>

            <label className="font-semibold">
              Course
            </label>

            <input
              type="text"
              name="course"
              placeholder="Example : MCA"
              value={formData.course}
              onChange={handleChange}
              className="w-full mt-2 h-12 rounded-xl border border-gray-300 px-4 focus:ring-4 focus:ring-blue-200 focus:border-blue-600 outline-none transition"
            />

          </div>

          {/* Specialization */}

          <div>

            <label className="font-semibold">
              Specialization
            </label>

            <input
              type="text"
              name="specialization"
              placeholder="Computer Applications"
              value={formData.specialization}
              onChange={handleChange}
              className="w-full mt-2 h-12 rounded-xl border border-gray-300 px-4 focus:ring-4 focus:ring-blue-200 focus:border-blue-600 outline-none transition"
            />

          </div>

          {/* University */}

          <div>

            <label className="font-semibold">
              University / College
            </label>

            <input
              type="text"
              name="university"
              placeholder="Your Institute"
              value={formData.university}
              onChange={handleChange}
              className="w-full mt-2 h-12 rounded-xl border border-gray-300 px-4 focus:ring-4 focus:ring-blue-200 focus:border-blue-600 outline-none transition"
            />

          </div>

          {/* Education Type */}

          <div>

            <label className="font-semibold">
              Education Type
            </label>

            <select
              name="educationType"
              value={formData.educationType}
              onChange={handleChange}
              className="w-full mt-2 h-12 rounded-xl border border-gray-300 px-4 focus:ring-4 focus:ring-blue-200 focus:border-blue-600 outline-none transition"
            >

              <option value="">
                Select
              </option>

              <option>Full Time</option>

              <option>Part Time</option>

              <option>Distance</option>

            </select>

          </div>

          {/* Current Status */}

          <div>

            <label className="font-semibold">
              Current Status
            </label>

            <select
              name="currentStatus"
              value={formData.currentStatus}
              onChange={handleChange}
              className="w-full mt-2 h-12 rounded-xl border border-gray-300 px-4 focus:ring-4 focus:ring-blue-200 focus:border-blue-600 outline-none transition"
            >

              <option value="">
                Select Status
              </option>

              <option>Pursuing</option>

              <option>Completed</option>

            </select>

          </div>
                    {/* Starting Year */}

          <div>
            <label className="font-semibold flex items-center gap-2">
              <FaCalendarAlt className="text-blue-600" />
              Starting Year
            </label>

            <select
              name="startingYear"
              value={formData.startingYear}
              onChange={handleChange}
              className="w-full mt-2 h-12 rounded-xl border border-gray-300 px-4 focus:ring-4 focus:ring-blue-200 focus:border-blue-600 outline-none transition"
            >
              <option value="">Select Year</option>

              {years.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Passing Year */}

          <div>
            <label className="font-semibold flex items-center gap-2">
              <FaCalendarAlt className="text-blue-600" />
              Passing Year
            </label>

            <select
              name="passingYear"
              value={formData.passingYear}
              onChange={handleChange}
              className="w-full mt-2 h-12 rounded-xl border border-gray-300 px-4 focus:ring-4 focus:ring-blue-200 focus:border-blue-600 outline-none transition"
            >
              <option value="">Select Year</option>

              {years.map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* CGPA */}

          <div className="col-span-2">
            <label className="font-semibold flex items-center gap-2">
              <FaPercentage className="text-blue-600" />
              CGPA / Percentage
            </label>

            <input
              type="text"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
              placeholder="Example : 8.50 or 82%"
              className="w-full mt-2 h-12 rounded-xl border border-gray-300 px-4 focus:ring-4 focus:ring-blue-200 focus:border-blue-600 outline-none transition"
            />
          </div>
        </div>

        {/* Information Card */}

        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-5 flex items-start gap-4">
          <div className="bg-blue-600 text-white rounded-full p-3">
            <FaBook />
          </div>

          <div>
            <h3 className="font-bold text-slate-800">
              Why do we ask this?
            </h3>

            <p className="text-slate-600 mt-1">
              Your education helps recruiters verify your qualifications
              and recommend relevant internships and jobs.
            </p>
          </div>
        </div>

        {/* Buttons */}

        <div className="flex justify-between mt-10">

          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition"
          >
            ← Previous
          </button>

          <button
            disabled={!isFormValid}
            onClick={handleSave}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300
            ${
              isFormValid
                ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-xl shadow-blue-300"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Save & Continue →
          </button>

        </div>

      </div>

    </div>
  );
}