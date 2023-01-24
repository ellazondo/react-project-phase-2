import React from "react";

function Search({ setSearchTerm }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Outfits:</label>
      <input
        type="text"
        id="search"
        placeholder="Search a temperature..."
        // value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;