import React from "react";
import OutfitCard from "./OutfitCard";

export default function OutfitList({ outfits, weatherData }) {
  return (
    <ul className="cards">
      {outfits.map((outfit) => {
        console.log(weatherData.temperature)
        console.log(outfit.temperature)
        if (Math.round(weatherData.temperature) === outfit.temperature) {
        return (
          <OutfitCard
            key={outfit.id}
            outfit={outfit}
          />
        );
        }
    
    
        // }
        
      })}
    </ul>
  );
}

