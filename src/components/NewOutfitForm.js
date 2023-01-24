import React, { useState } from "react";

export default function NewOutfitForm({ onAddOutfit }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [temperature, setTemperature] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/outfits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        temperature: temperature,
      }),
    })
      .then((r) => r.json())
      .then((newOutfit) => onAddOutfit(newOutfit));
  }

  return (
    <div className="new-outfit-form">
      <h2>New Outfit</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Outfit name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="temperature"
          step="0.01"
          placeholder="Temperature"
          value={temperature}
          onChange={(e) => setTemperature(parseFloat(e.target.value))}
        />
        <button type="submit">Add Outfit</button>
      </form>
    </div>
  );
}


