import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.trim(), // remove extra spaces
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // clear previous errors

    // Optional: Basic frontend validation
    if (!inputs.username || !inputs.email || !inputs.password) {
      setError("All fields are required.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8800/api/auth/register",
        inputs,
        { withCredentials: true } // in case cookies are set later
      );
      navigate("/login");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong.");
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Username"
          name="username"
          value={inputs.username}
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
        {err && <p className="error">{err}</p>}
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
