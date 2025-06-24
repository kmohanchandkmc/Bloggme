import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  const [title, setTitle] = useState(state?.title || "");
  const [content, setContent] = useState(state?.content || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  // ✅ Upload image to server
  const upload = async () => {
    if (!file) return "";
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("http://localhost:8800/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true, // ✅ send cookies
      });
      return res.data;
    } catch (err) {
      console.error("Upload error:", err);
      return "";
    }
  };

  // ✅ Handle publish or update
  const handleClick = async (e) => {
    e.preventDefault();

    let imgUrl = state?.img || "";
    if (file) {
      imgUrl = await upload();
    }
    

    try {
      if (state) {
        // ✅ Update post
        await axios.put(`http://localhost:8800/api/posts/${state.id}`, {
          title,
          content,
          cat,
          img: file ? imgUrl : state.img || "",
        }, {
          withCredentials: true, // ✅ send cookies
        });
      } else {
        // ✅ Create new post
        await axios.post("http://localhost:8800/api/posts", {
          title,
          content,
          cat,
          img: imgUrl,
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        }, {
          withCredentials: true, // ✅ send cookies
        });
      }
      navigate("/");
    } catch (err) {
      console.error("Post error:", err?.response?.data || err.message);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={content}
            onChange={setContent}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span><b>Status:</b> Draft</span>
          <span><b>Visibility:</b> Public</span>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">Upload Image</label>
          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              width={150}
              style={{ marginTop: "10px", borderRadius: "4px" }}
            />
          )}
          <div className="buttons">
            <button>Save as Draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          {["art", "science", "technology", "cinema", "design", "food"].map((category) => (
            <div className="cat" key={category}>
              <input
                type="radio"
                checked={cat === category}
                name="cat"
                value={category}
                id={category}
                onChange={(e) => setCat(e.target.value)}
              />
              <label htmlFor={category}>
                {category[0].toUpperCase() + category.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Write;
