import express from "express";
import authRoutes from "./routes/authRoute.js";
import userRoutes from "./routes/userRoute.js"; 
import postRoutes from "./routes/postsRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";


const app=express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/posts",postRoutes);

app.listen(8800,()=>{
    console.log("Server is running on port 8800");
})