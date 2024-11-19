import { useContext, useEffect } from "react";
import BookList from "./components/BookList";
import CreateBook from "./components/CreateBook";
import BooksContext from "./context/books";

const App = () => {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <CreateBook />
      <br />
      <BookList />
    </div>
  );
};
export default App;
