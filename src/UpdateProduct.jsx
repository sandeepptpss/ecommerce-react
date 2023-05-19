import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
const UpdateProduct = () => {
    const [datas, setData] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null); 
    const { id } = useParams();
   
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/detail/" + id);
            const result = await response.json();
            setData(result);
            setTitle(datas.title);
            setPrice(datas.price);
            setDescription(datas.description);
            setImage(datas.image);
        };
        fetchData();
    }, [id]);
 
    async function updateData(id) {
        alert(id)
        let formData = new FormData();
        formData.append("title", title);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("image", image);
        let result = await fetch("http://127.0.0.1:8000/api/update/" + id, {
          method: "PUT",
          body: formData,
        });
 
        result = await result.json();
        alert(result)
      }
    return (
        <div className="">
            <Header />
            <div className="container">
                <div className="col-ms-1  col-ms-1 ">
                    <h2>UpdateProduct</h2>
                    <input className="form-control" type="text" defaultValue={datas.title} onChange={(e) => setTitle(e.target.value)} />
                    <br></br>
                    <input className="form-control" onChange={(e) => setPrice(e.target.value)} type="text" defaultValue={datas.price} />
                    <br></br>
                    <textarea id="w3review" defaultValue={datas.description} onChange={(e) => setDescription(e.target.value)} rows="4" cols="127">
                    </textarea>
                    <br></br>
                    <input type="file" className="form-control" defaultValue={datas.image} onChange={(e) => setImage(e.target.value)} lassName="form-control" />
                    <img className="update-image" value={datas.image} src={`http://127.0.0.1:8000/upload/` + datas.image} />
                    <br></br>
                    <button type="submit" onClick={()=>updateData(datas.id)} className="btn btn-primary">
                        Update Product
                    </button>
                </div>
            </div>
        </div>
    );
};
export default UpdateProduct;
