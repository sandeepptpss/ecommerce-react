import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
const UpdateProduct =() => {
    const [datas, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
                const response = await fetch("http://127.0.0.1:8000/api/detail/"+id);
                const result = await response.json();
                console.warn(result)
                setData(result);
        };
        fetchData();
    }, [id]);
    return (
        <div className="">
            <Header />
            <div className="container">
                <div className="col-ms-1  col-ms-1 ">
                    <h2>UpdateProduct</h2>
                    <input className="form-control" type="text" defaultValue={datas.title} onChange={(e) => setData(e.target.value)} />
                    <br></br>
                    <input className="form-control" onChange={(e) => setData(e.target.value)} type="text" defaultValue={datas.price} />
                    <br></br>
                    <textarea id="w3review" defaultValue={datas.description} onChange={(e) => setData(e.target.value)} rows="4" cols="127">
                    </textarea>
                    <br></br>
                    <input type="file" className="form-control"  defaultValue={datas.image} onChange={(e) => setData(e.target.value)} lassName="form-control"/>
                    <img className="update-image" src={`http://127.0.0.1:8000/upload/`+datas.image} />
                    <br></br>
                    <button type="submit" className="btn btn-primary">
                     Update Product
                    </button>
                </div>
            </div>
        </div>
  );
};

export default UpdateProduct;
