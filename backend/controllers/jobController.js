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

export const getRecruiterJobs = async (req, res) => {
  try {
    const recruiter_id = req.user.id;

    if (!recruiter_id) {
      return res.status(400).json({
        success: false,
        message: "Recruiter ID is missing",
      });
    }

    const sql = `SELECT * FROM jobs WHERE recruiter_id = ? ORDER BY id DESC`;
    const [rows] = await db.query(sql, [recruiter_id]);

    return res.status(200).json({
      success: true,
      jobs: rows,
    });
  } catch (error) {
    console.error("Error fetching recruiter jobs:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const toggleJobStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // Expecting "open" or "closed"

    if (!id || !status) {
      return res.status(400).json({
        success: false,
        message: "Job ID and status are required",
      });
    }

    const recruiter_id = req.user.id;
    const sql = `UPDATE jobs SET status = ? WHERE id = ? AND recruiter_id = ?`;
    const [result] = await db.query(sql, [status, id, recruiter_id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Job not found or unauthorized",
      });
    }

    return res.status(200).json({
      success: true,
      message: `Job status updated to ${status}`,
    });
  } catch (error) {
    console.error("Error updating job status:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const recruiter_id = req.user.id;

    const sql = `DELETE FROM jobs WHERE id = ? AND recruiter_id = ?`;
    const [result] = await db.query(sql, [id, recruiter_id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Job not found or unauthorized",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting job:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
