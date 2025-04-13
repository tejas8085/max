import React from "react";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="container">
      
      <div className="shop-the-look">
        <h3>EXPLORE</h3>
        <h2>Shop The Look</h2>
        <div className="look-section">
          <div className="look-image">
            <img src="/images/model.jpeg" alt="Model Look" />
          </div>
          <div className="products">
            <div className="product">
              <img src="/images/shirt.jpg" alt="Cardigan" />
              <p>The Cloud Relaxed Cardigan</p>
              <div className="price">
                <span className="old-price">$188</span>
                <span className="new-price">$132</span>
              </div>
            </div>
            <div className="product">
              <img src="/images/shirt.jpg" alt="Cardigan" />
              <p>The Cloud Relaxed Cardigan</p>
              <div className="price">
                <span className="old-price">$188</span>
                <span className="new-price">$132</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;