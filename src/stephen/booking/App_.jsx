import { useState } from "react";
import BookList from "./components/BookList";
import CreateBook from "./components/CreateBook";

const App = () => {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.random() * 999,
        title,
      },
    ];

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
