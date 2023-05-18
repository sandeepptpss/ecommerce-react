import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/');
    }
  }, [])

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

// Form validation

  const validateForm = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password should be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

//   End form validtion



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      let item = { name, email, password };
      let result = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(item),
      });
      result = await result.json();

      localStorage.setItem('user-info', JSON.stringify(result));
      navigate('/login');
    }
  };

  return (
    <>
      <Header />
      <div className="main-register-page center">
        <div className="register-page col-ms-1  col-ms-1 ">
          <h2>User Sign Up</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter Name"
          />
          {errors.name && <span className="errer">{errors.name}</span>}
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter email"
          />
          {errors.email && <span className="errer">{errors.email}</span>}
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter Password"
          />
          {errors.password && <span className="errer">{errors.password}</span>}
          <br />
          <button type="submit" onClick={handleSubmit} className="btn btn-primary">
            Sign in
          </button>
          <br />
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Register;
