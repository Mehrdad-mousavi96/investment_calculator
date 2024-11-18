import { useState } from "react";

const CreateBook = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onCreate(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button>Add</button>
    </form>
  );
};

export default CreateBook;
