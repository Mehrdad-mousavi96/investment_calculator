import { useContext, useState } from "react";
import BooksContext from "../context/books";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const { handleCreateBook } = useContext(BooksContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    handleCreateBook(title);
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
