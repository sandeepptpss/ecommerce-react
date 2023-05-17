import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import Header from "./Header";
const Collection = () => {
  const [data, setData] = useState([]);
    const fetchData = async () => {
      let result = await fetch("http://127.0.0.1:8000/api/collection");
      result = await result.json();
      setData(result);
    };
    useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <div className="App container">
        <h1 style={{color:"red"}}>Shop Collections</h1>
        <div className="main-outer row">
          {data.map((item, i) => (
            <div style={{ width: '18rem' }} className="main-inner col-sm-3" key={i}>
             <img className="product-item-image"  src={"http://127.0.0.1:8000/upload/"+item.image} alt="image"/>
              <h4>{item.title}</h4>
              <span className="product-price">${item.price}</span>
              <p className="product-description">{item.description.slice(0, 50)}…</p>
              <Link target={"_blank"} to={"products" + item.id}>
              <button className="btn btn-primary">Add to cart<br></br>${item.price}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Collection;

