import React, { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title)
  }

  return (
    <div onSubmit={handleSubmit}>
      <form>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Create!</button> 
      </form>
    </div>
  );
};

export default BookCreate;
