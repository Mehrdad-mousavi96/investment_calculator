import { useState } from "react";
import EditBook from "./EditBook";
import { useBooksContext } from "../hooks/use-books-ocntext";


const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false)
  const {handleDeleteBook, handleEditbook} = useBooksContext()

  const handleSubmit = (id, newTitle) => {  
    setShowEdit(false);
    handleEditbook(id, newTitle);
  }

  return (
    <div>
      {showEdit ? <EditBook book={book} onSubmit={handleSubmit} /> : book.title}
      {!showEdit && <button onClick={() => setShowEdit(true)}>Edit</button>}
      <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
    </div>
  );
};

export default BookShow;
