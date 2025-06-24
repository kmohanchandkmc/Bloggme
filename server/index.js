import express from "express";
import authRoutes from "./routes/authRoute.js";
import userRoutes from "./routes/userRoute.js"; 
import postRoutes from "./routes/postsRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import path from "path";

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Ensure upload folder exists
const uploadPath = path.resolve("../client/public/upload");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Upload route
app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  res.status(200).json(req.file.filename);
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Server
app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
