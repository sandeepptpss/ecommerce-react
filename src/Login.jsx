import { Button } from "react-bootstrap";
const Login=()=>{
    return(
        <div className="container center">
        <div className="login-page col-ms-1 offset-sm-4">
            <h2>Login</h2>
            <input type="email" className="form-control" placeholder="Enter email"></input>
            <br></br>
            <input type="password" className="form-control" placeholder="Enter Password"></input>
            <br></br>
            <button type="submit" className="btn btn-primary">Login in</button>
        </div>
        </div>
    )
}
export default Login;