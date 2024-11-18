import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSubmit(term)
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input value={term} onChange={(e) => setTerm(e.target.value)} />
      {term}
    </form>
  );
};

export default SearchBar;
