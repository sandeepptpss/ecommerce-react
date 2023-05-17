import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Login  from './Login';
import Register from './Register';
import NoPage from './components/pages/NoPage';
import Profile from './Profile';
import Collection from './Collection';
import ProductDetail from './ProductDetail';
function App() {
  return (
    <div className="App">
   <BrowserRouter>

      <Routes>
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/update" element={<UpdateProduct/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="*" element={<NoPage />} />
      <Route path="/collections" element={<Collection/>}/>
      <Route path="/products" element={<ProductDetail/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
