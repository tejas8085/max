import React from "react";
import "./Grid.css";

const Grid = () => (
  <div className="flex-container">
    {/* Single Row Layout */}
    <div className="box upone">
      <img src="/images/her.webp" alt=" pic 1" />
    </div>

    <div className="box upsec">
      <img src="/images/her.webp" alt=" pic 2" />
    </div>

    <div className="column">
      <div className="box upsmall">
        <img src="/images/her.webp" alt=" pic 3" />
      </div>
      <div className="box upsmall">
        <img src="/images/her.webp" alt=" pic 4" />
      </div>
    </div>

   <div className="box upone">
      <img src="/images/her.webp" alt=" pic 5" />
    </div>

    {/* <div className="box upsec">
      <img src="/images/her.webp" alt=" pic 6" />
    </div> */}

    {/*<div className="column">
      <div className="box dowsmall">
        <img src="/images/her.webp" alt=" pic 3" />
      </div>
      <div className="box dowsmall">
        <img src="/images/her.webp" alt=" pic 4" />
      </div>
    </div> */}
  </div>
);

const App = () => {
  return (
    <div className="page">
      <Grid />
    </div>
  );
};

export default App;
