import React from "react";
import rectangle1 from "./images/Rectangle1.png";
import rectangle2 from "./images/Rectangle2.png";
import rectangle3 from "./images/Rectangle3.png";
import rectangle4 from "./images/Rectangle4.png";
import rectangle5 from "./images/Rectangle5.png";
import rectangle6 from "./images/Rectangle6.png";

function Gallery() {
  const arr = [
    rectangle1,
    rectangle2,
    rectangle3,
    rectangle4,
    rectangle5,
    rectangle6,
    rectangle1,
    rectangle2,
    rectangle3,
    rectangle4,
    rectangle5,
    rectangle6,
  ];
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: "10px 10px",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        {arr.map((item) => (
          <img src={item} alt="galleryimage" height="95%" width="95%" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
