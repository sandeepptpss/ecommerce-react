import Header from "./Header";
import { useState } from "react";


const Product=()=>{
    const [title,setTitle]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription] =useState("")
    const [image,setImage] =useState("")

  async function  addProduct(){
    let productItem ={title,price,description,image}

    let result = await fetch("http://127.0.0.1:8000/api/addproduct", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(productItem)
    });
    result = await result.json();
console.warn(result);
}
return(
<>
<Header />
        <div className="add-product-page">
        <div className="main-register-page  center">
        <div className="register-page col-ms-1  col-ms-1 ">
            <h2>Add Prodct Details</h2>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Enter Title"></input>
            <br></br>
            <input type="text"  value={price} onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder="Enter price"></input>
            <br></br>
            <input type="text"  value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" placeholder="Enter Description"></input>
            <br></br>
            <input type="file" value={image} onChange={(e)=> setImage(e.target.vlaue)}  name="image" placeholder="Choose image form-control"></input>
            <br></br>
            <button type="submit" onClick={addProduct} className="btn btn-primary">Add Product</button>
        </div>
    </div>
        </div>
        </>
    )
}
export default Product;