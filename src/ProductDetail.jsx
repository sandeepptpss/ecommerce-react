import React from "react";
const ProductDetail=()=>{
    return(
        <div className="main-product-detail">
        <h2>Product Page</h2>
           <div className="left-side-data">
            <img src="http://127.0.0.1:8000/upload/20230517104922.jpg" width="250px" height="250px"/>
           </div>
           <div className="right-side-data">
           <span>$499</span>
              <h2>Hair Growth Oil (2 Pack)</h2>

              <button className="btn btn-primary">Add to cart</button>

           </div>
        </div>
    )
}
export default ProductDetail;