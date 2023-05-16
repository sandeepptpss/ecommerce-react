import Header from "./Header";
import { useState } from "react";
const Product = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); 
  async function addProduct() {
    try {
      let formData = new FormData();
      formData.append("title", title);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("image", image);
  
      let result = await fetch("http://127.0.0.1:8000/api/addproduct", {
        method: "POST",
        body: formData,
      });
  
      result = await result.json();
      console.warn(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <>
      <Header />
      <div className="add-product-page">
        <div className="main-register-page  center">
          <div className="register-page col-ms-1  col-ms-1 ">
            <h2>Add Product Details</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Enter Title"
            />
            <br />
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-control"
              placeholder="Enter price"
            />
            <br />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              placeholder="Enter Description"
            />
            <br />
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])} 
              name="image"
              className="form-control"
            />
            <br />
            <button type="submit" onClick={addProduct} className="btn btn-primary">
              Add Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
