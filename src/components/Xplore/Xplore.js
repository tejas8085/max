import React from 'react';
import './Xplore.css';  // Import the CSS file

const Xplore = () => {
  return (
    <div className="grid">
      {/* Column 1 */}
      <div className="column">
        <div className="image-box">
          <img src="/images/shop2.jpg" alt="Shirt 1" />
          <div className="label">WOMEN</div>
        </div>
      </div>

      {/* Column 2 (text + shirt 3) */}
      <div className="column column-text-image">
        <div className="text-block">
          <p>TOP CATEGORIES</p>
          <h1>I Am Looking For 
            <br/>Fashion</h1>
        </div>
        <div className="image-box shirt-3">
          <img src="/images/men1.jpg" alt="Shirt 3" />
          <div className="label">MEN</div>
        </div>
      </div>

      {/* Column 3 (2 equal shirts) */}
      <div className="column multi">
        <div className="image-box">
          <img src="/images/de2.webp" alt="Shirt 4" />
          <div className="label">ACCESSORIES</div>
        </div>
        <div className="image-box">
          <img src="/images/shoes1.jpg" alt="Shirt 5" />
          <div className="label">SHOES</div>
        </div>
      </div>
    </div>
  );
}

export default Xplore;
