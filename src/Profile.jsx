import React ,{useState, useEffect} from "react";
import Header from "./Header";
 
const Profile =()=>{
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("http://127.0.0.1:8000/api/profile/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

useEffect(()=>{
  fetchUserData();
},[]);
    return(
        <>
       < Header/>
        <div className="App">
        <h1 style={{ color: "red" }}>User Profile</h1>
        <table cellPadding="0" cellSpacing="0">
      <tr>
    <th>User id</th>
    <th>Name</th>
    <th>Email</th>
  </tr>
    { users.map((item)=>{
            return (
              <tr>
              <td> {item.id}</td>
              <td>{ item.name}</td>
              <td>{ item.email}</td>
              </tr>
            );
          })
          }
 </table>


      </div>
      </>
     
    );
 }
export default Profile;
