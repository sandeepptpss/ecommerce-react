import './App.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Login  from './Login';
import Register from './Register';
import NoPage from './components/pages/NoPage';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Header />
      <Routes>
      <Route path="/add" element={<AddProduct />} />
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
