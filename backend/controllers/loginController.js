import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let userType = 0;
    let rows = [];

    // Check Candidate Table
    const [candidate] = await db.query(
      "SELECT * FROM candidates WHERE email = ?",
      [email]
    );

    if (candidate.length > 0) {
      rows = candidate;
      userType = 2;
    } else {
      // Check Recruiter Table
      const [recruiter] = await db.query(
        "SELECT * FROM recruiters WHERE email = ?",
        [email]
      );

      if (recruiter.length > 0) {
        rows = recruiter;
        userType = 1;
      }
    }

    // User not found
    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Compare Password
    const isMatch = await bcrypt.compare(password, rows[0].password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: rows[0].id,
        email: rows[0].email,
        userType: userType,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // Login Success
    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      userType,
      user: {
        id: rows[0].id,
        name: rows[0].name,
        email: rows[0].email,
      },
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};