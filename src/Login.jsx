import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
const Login=()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate('/add');
        
        }
    },[])
    return(
        <>
     <Header />
    
        <div className="container center">
        <div className="login-page col-ms-1 offset-sm-4">
            <h2>Login</h2>
            
        </div>
        </div>
        </>
    )
}
export default Login;