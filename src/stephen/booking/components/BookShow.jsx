import { useState } from "react";
import EditBook from "./EditBook";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  return (
    <div>
      {showEdit ? <EditBook book={book} onSubmit={handleSubmit} /> : book.title}
      {!showEdit && <button onClick={() => setShowEdit(true)}>Edit</button>}
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  );
};

export default BookShow;
