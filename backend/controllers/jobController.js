import db from "../config/db.js";

export const createJob = async (req, res) => {
  try {
    const {
      job_title,
      job_description,
      experience_years,
      required_skills,
      job_type,
      work_mode,
      salary,
      location,
      application_deadline,
      vacancies,
      status = "open",
    } = req.body;

    const recruiter_id = req.user.id;

    if (!job_title || !job_description || !experience_years || !required_skills || !job_type || !work_mode || !salary || !location || !application_deadline || !vacancies) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const sql = `
      INSERT INTO jobs (
        recruiter_id, job_title, job_description, experience_years, 
        required_skills, job_type, work_mode, salary, location, 
        application_deadline, vacancies, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.query(sql, [
      recruiter_id,
      job_title,
      job_description,
      experience_years,
      required_skills,
      job_type,
      work_mode,
      salary,
      location,
      application_deadline,
      vacancies,
      status,
    ]);

    return res.status(201).json({
      success: true,
      message: "Job posted successfully",
      jobId: result.insertId,
    });
  } catch (error) {
    console.error("Error creating job:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
