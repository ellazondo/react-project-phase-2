import OutfitCard from "./OutfitCard";
import React from "react";

export default function OutfitListAll ({ outfits }) {
    return (
        <ul className="cards">
      {outfits.map((outfit) => {
        
        
        return (
          <OutfitCard
            key={outfit.id}
            outfit={outfit}
          />
        );
        
    
    
        // }
        
      })}
    </ul>
  );

    
}

// console.log(weatherData.temperature)
//         console.log(outfit.temperature)