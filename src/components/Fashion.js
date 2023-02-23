import React, { useEffect, useState } from "react";
// import NewOutfitForm from "./NewOutfitForm";
import OutfitList from "./OutfitList";
// import Search from "./Search";

export default function Fashion({weatherData}) {
  const [outfits, setOutfits] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/outfits")
      .then((r) => r.json())
      .then((OutfitsArray) => {
        setOutfits(OutfitsArray);
      });
  }, []);

  // function onAddOutfit(newOutfit) {
  //   const updatedOutfitArray = [...outfits, newOutfit];
  //   setOutfits(updatedOutfitArray);
  // }


  return (
    <main>
      <OutfitList
        weatherData={weatherData}
        outfits={outfits}
      />
      
    </main>
  );
}
//  const displayedOutfits = outfits.filter((outfit) => {
//     return outfit.name.toLowerCase();
//   });
// .includes(searchTerm.toLowerCase())
