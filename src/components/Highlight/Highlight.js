import React from "react";
import "./Highlight.css";
// import { AlignCenter } from "lucide-react";

const products = [
  {
    id: 1,
    title: "The Cloud Relaxed Cardigan",
    color: "Black",
    oldPrice: "$188",
    newPrice: "$132",
    image: "/images/shirt.jpg",
  },
  {
    id: 2,
    title: "The Cloud Relaxed Cardigan",
    color: "Black",
    oldPrice: "$188",
    newPrice: "$132",
    image: "/images/shirt.jpg",
  },
  {
    id: 3,
    title: "The Cloud Relaxed Cardigan",
    color: "Black",
    oldPrice: "$188",
    newPrice: "$132",
    image: "/images/shirt.jpg",
  },
  {
    id: 4,
    title: "The Cloud Relaxed Cardigan",
    color: "Black",
    oldPrice: "$188",
    newPrice: "$132",
    image: "/images/shirt.jpg",
  },
  {
    id: 5,
    title: "The Cloud Relaxed Cardigan",
    color: "Black",
    oldPrice: "$188",
    newPrice: "$132",
    image: "/images/shirt.jpg",
  },
];

const Highlight = () => {
  return (
    <div className="container">
      {" "}
      <h2>SHOP BY</h2> <h1>Our Highlights</h1>{" "}
      <div  className="tabs">
        {" "}
        <span className="active">NEW ARRIVALS</span> <span>BEST SELLERS</span>{" "}
        <span>ON SALE</span>{" "}
      </div>{" "}
      <div className="product-list">
        {" "}
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {" "}
            
            <img src={product.image} alt={product.title} />{" "}
            <h3>{product.title}</h3> <p>{product.color}</p>{" "}
            <p className="price">
              {" "}
              <span className="old-price">{product.oldPrice}</span>{" "}
              <span className="new-price">{product.newPrice}</span>{" "}
            </p>{" "}
          </div>
        ))}{" "}
      </div>{" "}
      <button className="shop-now">Shop Now</button>{" "}
    </div>
  );
};

export default Highlight;
