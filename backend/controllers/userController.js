import db from "../mysql/db.js";

export const register = (req, res) => {
  const { name, email, password } = req.body;

  const sql =
    "INSERT INTO users(name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
    });
  });
};

export const login = (req, res) => {
  res.json({
    success: true,
    message: "Login API",
  });
};