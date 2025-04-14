import React from "react";
import "./Grid.css";

const Grid = () => {
  const gridItems = [
    { title: "lorem epsum", src: "/images/grid1.jpg" },
    { title: "lorem", src: "/images/grid1.jpg" },
    {
      split: true,
      items: [
        { title: "scan", src: "/images/grid1.jpg" },
        { title: "Titll", src: "/images/grid1.jpg" },
      ],
    },
    // { title: "Title 4", src: "/images/grid1.jpg" },
    // { title: "Title 5", src: "/images/grid1.jpg" },
    // {
    // split: true,
    // items: [
    // { title: "Title 6A", src: "/images/grid1.jpg" },
    // { title: "Title 6B", src: "/images/grid1.jpg" },
    // ],
    // },
  ];

  // Function to render the grid
  const renderGrid = () => {
    return (
      <div className="flex-grid">
        {/* Row 1 */}
        <div className="grid-row">
          <div className="grid-item9 grid-item1">
            <div className="image-wrapper">
              <img src={gridItems[0].src} alt={gridItems[0].title} />
              <div className="overlay-content">
                <h3>{gridItems[0].title}</h3>
                <button>Click Me</button>
              </div>
            </div>
          </div>
          <div className="grid-item9 grid-item2">
            <div className="image-wrapper">
              <img src={gridItems[1].src} alt={gridItems[1].title} />
              <div className="overlay-content">
                <h3>{gridItems[1].title}</h3>
                <button>Click Me</button>
              </div>
            </div>
          </div>
          <div className="grid-item9 grid-item3">
            <div className="split-vertical">
              {gridItems[2].items.map((subItem, subIndex) => (
                <div className="split-box" key={subIndex}>
                  <div className="image-wrapper">
                    <img src={subItem.src} alt={subItem.title} />
                    <div className="overlay-content">
                      <h3>{subItem.title}</h3>
                      <button>Click Me</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid-row">
          <div className="grid-item8 grid-item4">
            <div className="image-wrapper">
              <img src={gridItems[0].src} alt={gridItems[0].title} />
              <div className="overlay-content">
                <h3>{gridItems[0].title}</h3>
                <button>Click Me</button>
              </div>
            </div>
          </div>
          <div className="grid-item8 grid-item5">
            <div className="image-wrapper">
              <img src={gridItems[1].src} alt={gridItems[1].title} />
              <div className="overlay-content">
                <h3>{gridItems[1].title}</h3>
                <button>Click Me</button>
              </div>
            </div>
          </div>
          <div className="grid-item8 grid-item6">
            <div className="split-vertical">
              {gridItems[2].items.map((subItem, subIndex) => (
                <div className="split-box" key={subIndex}>
                  <div className="image-wrapper">
                    <img src={subItem.src} alt={subItem.title} />
                    <div className="overlay-content">
                      <h3>{subItem.title}</h3>
                      <button>Click Me</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Render the grid twice */}
      {renderGrid()}
      {/* {renderGrid()} */}
    </div>
  );
};

export default Grid;
