import './App.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Login  from './Login';
import Register from './Register';
import NoPage from './components/pages/NoPage';
import Protected from './Protected'
function App() {
  return (
    <div className="App">
   <BrowserRouter>

      <Routes>
      <Route path="/add" element={<AddProduct />} />
      <Route path="/" element={<Home/>}/>
      <Route path="/update" element={<UpdateProduct/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="*" element={<NoPage />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
