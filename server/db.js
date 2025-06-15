import mysql from "mysql2"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "admin@123",
  database:"blog"
})
 db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
});