import React, {useState} from "react";
const Register=()=>{
    const [name, setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
async  function SignUp(){
let item ={name,email, password}
let result = await fetch("http://127.0.0.1:8000/api/register",{
    method:"POST",
    headers:{
    "Content-Type":"application/json",
    "Accept":"application/json"
    },
    body: JSON.stringify(item) 
})
result = await result.json();
console.warn("result",result)
  }
    return(
        <div className="container center">
        <div className="register-page col-ms-1 offset-sm-4">
            <h2>User Sign Up</h2>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter Name"></input>
            <br></br>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter email"></input>
            <br></br>
            <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Enter Password"></input>
            <br></br>
            <button type="submit" onClick={SignUp} className="btn btn-primary">Sign in</button>
        </div>
        </div>
)
}
export default Register;