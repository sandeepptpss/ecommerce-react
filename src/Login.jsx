import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Header from "./Header";
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
 const validateForm =()=>{
    const newErrors = {};

    if (!email) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Invalid email address";
      }
     
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;


 }
    async function login() {
        if (validateForm()) {
        let item = { email, password }
        let result = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem('user-info', JSON.stringify(result));
        navigate('/');
    }
}
    return (
        <>
            <Header />
            <div className="main-register-page  login-page center">
                <div className="register-page col-ms-1  col-ms-1 ">
                    <h2>Login</h2>
                    <br></br>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email"></input>
                    {errors.email && <span className="errer">{errors.email}</span>}
                    <br></br>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Enter Password"></input>
           
                    <br></br>
                    <button type="submit" onClick={login} className="btn btn-primary">Login</button>
                    <br></br>
                    <Link to="/register">Sign Up</Link>
                </div>
            </div>
        </>
    )
}
export default Login;