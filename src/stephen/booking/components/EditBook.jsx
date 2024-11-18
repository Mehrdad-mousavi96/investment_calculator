import { useState } from "react";

const EditBook = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleSubmit}>Save</button>
    </form>
  );
};

export default EditBook;
