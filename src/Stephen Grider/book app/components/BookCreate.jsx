import React, { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    onCreate(title)
    setTitle('')
  }

  return (
    <div onSubmit={handleSubmit}>
      <form>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button>Create!</button> 
      </form>
    </div>
  );
};

export default BookCreate;
