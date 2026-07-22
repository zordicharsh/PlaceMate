import db from "../config/db.js";
import bcrypt from "bcrypt";

export const registerCandidate = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql_email = "SELECT * FROM candidates WHERE email = ?";

    const [rows] =  await db.query(sql_email,[email]);

    if(rows.length >0){
         return res.status(400).json({
    success: false,
    message: "Email already registered",
  });
    }
    else{
        const sql = `
      INSERT INTO candidates (name, email, password)
      VALUES (?, ?, ?)
    `;

    await db.query(sql, [name, email, hashedPassword]);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
    }

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const registerRecruiter = async (req,res)=>{

    try{
    const {name,email,password,orgname,designation,tel} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql_email = "SELECT * FROM recruiters WHERE email = ?";
    const [rows] =  await db.query(sql_email,[email]);

    if(rows.length > 0){
        return res.status(400).json({
        success: false,
        message: "Email already registered",
  });

    }
    else{

    const sql = `INSERT INTO recruiters (name,email,password,orgname,designation,tel) VALUES (?,?,?,?,?,?)`;

    await db.query(sql,[name,email,hashedPassword,orgname,designation,tel]);
    return res.status(201).json({
         success: false,
      message: "User Register Suceess",
    });
    } 

    }catch(error){
        console.log(error);
        return res.status(500).json({
        success: false,
        message: "Server Error",
    });
    }

}