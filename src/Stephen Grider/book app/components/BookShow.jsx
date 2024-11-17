import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "20px",
        border: "2px solid black",
        padding: "5px",
      }}
    >
      {showEdit ? (
        <BookEdit onSubmit={handleSubmit} book={book} />
      ) : (
        <h3>{book.title}</h3>
      )}

      <div style={{ margin: "0 10px", justifyContent: "start" }}>
        <div>
          {!showEdit && <button onClick={() => setShowEdit(true)}>Edit</button>}
        </div>
        <button onClick={() => onDelete(book.id)}>Delete</button>
      </div>
    </div>
  );
};

export default BookShow;
