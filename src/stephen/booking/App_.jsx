import { useEffect, useState } from "react";
import BookList from "./components/BookList";
import CreateBook from "./components/CreateBook";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);

  // getting data from db.json
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => { 
    fetchBooks()
  }, [])

  const handleCreateBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const handleEditbook = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          title: newTitle,
        };
      }
    });

    setBooks(updatedBooks);
  };

  return (
    <div>
      <CreateBook onCreate={handleCreateBook} />
      <br />
      <BookList
        books={books}
        onDelete={handleDeleteBook}
        onEdit={handleEditbook}
      />
    </div>
  );
};
export default App;
