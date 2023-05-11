import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Header from "./Header";
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function login() {
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
        navigate('/add');
    }
    return (
        <>
            <Header />
            <div className="main-register-page  login-page center">
                <div className="register-page col-ms-1  col-ms-1 ">
                    <h2>Login</h2>
                    <br></br>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter email"></input>
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