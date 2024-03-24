import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Greeting = () => {
  return (
    <>
    <h1 style={{textAlign:"center", marginTop:"5px"}}>Yaung Yin Shoe Shop</h1>
    <div className="card-located">
  <Product 
   title="Model 2x"
   pathImage="data:image/jpeg;base64,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" 
   price ="400$"
   />
  <Product
  title="4K White"
  pathImage="data:image/jpeg;base64,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" 
  price ="200$"
  />
  <Product 
   title="Honey Bee"
   pathImage="data:image/jpeg;base64,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" 
   price ="400$"
  />
  <Product 
     title="Blue Ray"
     pathImage="data:image/jpeg;base64,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" 
     price ="300$"
  />

</div>
</>
  );
};

const Product = (props) =>{
  return(
    <>
<div className="container mt-5 text-center card-style">
  <br />
  <img 
    src={props.pathImage}
  />
  <br />
  <h3 style={{marginTop:"20px"}}>{props.title}</h3>
  <p>Price : {props.price}</p>
  <br />
  <button className="cool-button"
 onClick={() =>buyClick(props.title,props.price)}
  >Buy</button>
</div>
    </>
  )
}
const buyClick =(itemName,itemPrice) =>{
  alert("You Bought this Item "+ itemName + " Price is "+ itemPrice);
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
