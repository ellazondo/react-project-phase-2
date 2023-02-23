
import OutfitListAll from "./OutfitListAll";
import React, { useEffect, useState } from "react";
import NewOutfitForm from "./NewOutfitForm";
import Search from "./Search";

export default function OutfitInspo({weatherData}) {
  const [outfits, setOutfits] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/outfits")
      .then((r) => r.json())
      .then((OutfitsArray) => {
        setOutfits(OutfitsArray);
      });
  }, []);

  function onAddOutfit(newOutfit) {
    const updatedOutfitArray = [...outfits, newOutfit];
    setOutfits(updatedOutfitArray);
  }

  const displayedOutfits = outfits.filter((outfit) => {
    return outfit.temperature.toString().includes(searchTerm.toString());
  });
  console.log('searched temperature', searchTerm)

  return (
    <main>
      <h1 className="mb-5 hero d-flex d-none d-md-block">Outfit Inspo</h1>
      
      <Search setSearchTerm={setSearchTerm} />
      <OutfitListAll
        outfits={displayedOutfits}
      />
      <NewOutfitForm onAddOutfit={onAddOutfit} />
    </main>
  );
}
