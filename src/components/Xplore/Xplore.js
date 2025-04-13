import React from 'react';
import './Xplore.css';

const Xplore = () => (
  <div className="flex-container">
    {/* Box 1 - Women */}
    <a href="/women" className="box-link">
      <div className="box upone hover-box">
        <div className="image-container">
          <img src="/images/her.webp" alt="Women" />
          <div className="label">Women</div>
        </div>
      </div>
    </a>

    <div className="column">
      <div className="box upsmall text-box">
        <h1>TOP CATEGORIES</h1>
        <h1>I Am Looking For <br /> Fashion</h1>
      </div>

      <a href="/men" className="box-link">
        <div className="box upsmall hover-box">
          <div className="image-container">
            <img src="/images/her.webp" alt="Men" />
            <div className="label">Men</div>
          </div>
        </div>
      </a>
    </div>

    <div className="column">
      <a href="/accessories" className="box-link">
        <div className="box upsmall hover-box">
          <div className="image-container">
            <img src="/images/her.webp" alt="Accessories" />
            <div className="label">Accessories</div>
          </div>
        </div>
      </a>

      <a href="/shoes" className="box-link">
        <div className="box upsmall hover-box">
          <div className="image-container">
            <img src="/images/her.webp" alt="Shoes" />
            <div className="label">Shoes</div>
          </div>
        </div>
      </a>
    </div>
  </div>
);

export default Xplore;
