import React from "react";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="shop-the-look-container">
      {" "}
      <h4 className="explore-text">EXPLORE</h4>{" "}
      <h1 className="shop-title">Shop The Look</h1>{" "}
      <div className="shop-content">
        {" "}
        <div className="main-image">
          {" "}
          <img
            src="/images/girl.jpg"
            alt="Model Look"
            className="model-image"
          />{" "}
          
        </div>{" "}
        <div className="items-section">
          {" "}
          <div className="item-card">
            {" "}
            <img
              src="/images/shirt1.jpg"
              alt="Blue T-Shirt"
              className="item-image"
            />{" "}
            <div className="item-details">
              {" "}
              <p className="item-name">The Cloud Relaxed Cardigan</p>{" "}
              <p className="item-price">
                <s>$188</s> $132
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="item-card">
            {" "}
            <img
              src="/images/shirt1.jpg"
              alt="Black Cardigan"
              className="item-image"
            />{" "}
            <div className="item-details">
              {" "}
              <p className="item-name">The Cloud Relaxed Cardigan</p>{" "}
              <p className="item-price">
                <s>$188</s> $132
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Categories;
