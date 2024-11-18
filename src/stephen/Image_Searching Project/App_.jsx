import React, { useState } from "react";
import searchImages from "./api";
import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";


const App_ = () => {

  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term)

    setImages(result)
    
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App_;
