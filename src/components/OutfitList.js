import React from "react";
import OutfitCard from "./OutfitCard";

export default function OutfitList({ outfits }) {
  return (
    <ul className="cards">
      {outfits.map((outfit) => {
        return (
          <OutfitCard
            key={outfit.id}
            outfit={outfit}
          />
        );
      })}
    </ul>
  );
}

