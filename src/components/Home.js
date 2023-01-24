import React, { useEffect, useState } from "react";
import NewOutfitForm from "./NewOutfitForm";
import OutfitList from "./OutfitList";
import Search from "./Search";

export default function Home() {
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
    return outfit.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      
      <Search setSearchTerm={setSearchTerm} />
      <OutfitList
        outfits={displayedOutfits}
      />
      <NewOutfitForm onAddOutfit={onAddOutfit} />
    </main>
  );
}
