import React from "react";

export default function OutfitCard({ outfit }) {
  const { name, image, temperature } = outfit;


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Temperature: {temperature}</p>
    </li>
  );
}