import { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/books";

const BookList = () => {

  const {books} = useContext(BooksContext)

  console.log(books)

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <BookShow book={book} />
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
