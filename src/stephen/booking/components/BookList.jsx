import { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/books";

const BookList = ({ books, onDelete, onEdit }) => {

  const num = useContext(BooksContext)
  console.log(num)

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {num}
          <BookShow book={book} onDelete={onDelete} onEdit={onEdit} />
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
