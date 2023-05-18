import React, {createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
const ProductDetail = () => {
  const [details, setDetails] = useState([]);
  const [data, setData] = useState([]);
const {id}=useParams()
  const fetchData = async () => {
      const response = await fetch(`http://127.0.0.1:8000/api/detail/${id}`);
      console.log("response",response)
      const result = await response.json();
      setDetails(result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData1 = async() => {
      const response = await fetch(`http://127.0.0.1:8000/api/collection/`);
      const result = await response.json();
      setData(result);
    };
  useEffect(() => {
    fetchData1();
  }, []);
  return (
    <>
      <Header />
      <div className="main-product-detail">
        <h2>Product Page</h2>
        <div className="main-inner-side">
          <div className="left-side-data">
            <img src={`http://127.0.0.1:8000/upload/${details.image}`} width="500px" height="450px" alt="Product" />
          </div>
          <div className="right-side-data">
            <h2>{details.title}</h2>
            <p>${details.price}</p>
            <div className="btn-group" role="group">
              <input type="number" min="1" defaultValue="1" className="form-control" />
            </div>
            <br></br>
            <button className="btn btn-primary">Add to cart<br></br>${details.price}</button>
          </div>
        </div>
        <h2>Product Description</h2>
        <p className="product-description">{details.description}</p>
      </div>
    </>
  );
};
export default ProductDetail;
