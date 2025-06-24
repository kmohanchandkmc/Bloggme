import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register new user
export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const insertQuery = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(insertQuery, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

// Login
export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...userInfo } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "lax",   // ✅ fix for localhost
        secure: false      // ✅ fix for localhost
      })
      .status(200)
      .json(userInfo);
  });
};

// Logout
export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "lax",   // ✅ match sameSite with login
      secure: false      // ✅ match secure with login
    })
    .status(200)
    .json("User has been logged out.");
};
