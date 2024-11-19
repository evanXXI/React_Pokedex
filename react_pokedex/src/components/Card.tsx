import React from "react";
import imgSrc from "../images/800px-Carapuce-RFVF.png";

const Card = () => {
  return (
    <div className="col">
      <div className="card">
        <img
          src={imgSrc}
          className="card-img-top"
          alt="..."
          style={{
            maxHeight: "150px",
            aspectRatio: "1/1",
            objectFit: "contain",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
