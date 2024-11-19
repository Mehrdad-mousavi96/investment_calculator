import { useContext, useState } from "react";
import EditBook from "./EditBook";
import BooksContext from "../context/books";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { handleDeleteBook, handleEditbook } = useContext(BooksContext);

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    handleEditbook(id, newTitle);
  };

  return (
    <div>
      {showEdit ? <EditBook book={book} onSubmit={handleSubmit} /> : book.title}
      {!showEdit && <button onClick={() => setShowEdit(true)}>Edit</button>}
      <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
    </div>
  );
};

export default BookShow;
