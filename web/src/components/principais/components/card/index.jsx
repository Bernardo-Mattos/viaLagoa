import React from "react";
import "./styles.css";

export default function Card({image , preco , desc}) {
  return (
    <div className="card">
      <img className="imageCard" src={image} alt="produto" />
      <div className="card__content">
        <p className="card__title">{preco}</p>
        <p className="card__description">
          {desc}
        </p>
      </div>
    </div>
  );
}
