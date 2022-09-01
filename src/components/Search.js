import React from "react";

const Search = ({ filterBySearch }) => {
  return (
    <div className="mb-3">
      <input placeholder="Search a todo" onChange={filterBySearch} />
    </div>
  );
};

export default Search;
