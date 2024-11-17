import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
  return (
    <div
      style={{
        margin: "20px",
        backgroundColor: "lightgray",
        display: "grid",
        justifyContent: "start",
        flex: "row",
      }}
    >
      {books.map((book) => (
        <BookShow
          onEdit={onEdit}
          key={book.id}
          book={book}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default BookList;
