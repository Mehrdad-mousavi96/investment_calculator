import { useState } from "react";
import { useBooksContext } from "../hooks/use-books-ocntext";


const CreateBook = () => {
  const [title, setTitle] = useState("");
  const {handleCreateBook} = useBooksContext()

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
