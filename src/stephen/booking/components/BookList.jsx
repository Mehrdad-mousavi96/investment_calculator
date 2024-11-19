import {useBooksContext} from "../hooks/use-books-ocntext";
import BookShow from "./BookShow";


const BookList = () => {

  const {books} = useBooksContext();
  console.log(useBooksContext())

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
