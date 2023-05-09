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

        </div>
        </>
    )
}
export default Login;