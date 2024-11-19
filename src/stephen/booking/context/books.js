import axios from "axios";
import { createContext, useState } from "react";

export const BooksContext = createContext()

const CustomProvider = ({children}) => {
    const [books, setBooks] = useState([])

    // getting data from db.json
    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books")
        setBooks(response.data);
    };

    // creating book by relevant component
    const handleCreateBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
          title,
        });
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
      };
    
    // deleting book by receiving id
      const handleDeleteBook = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
    
        const updatedBooks = books.filter((book) => {
          return book.id !== id;
        });
    
        setBooks(updatedBooks);
      };
      
    // editing the title of the book
      const handleEditbook = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
          title: newTitle,
        });
        const updatedBooks = books.map((book) => {
          if (book.id === id) {
            return {
              ...book,
              ...response.data,
            };
          }
    
          return book;
        });
    
        setBooks(updatedBooks);
      };

      const valueToShare = {
        books, 
        fetchBooks,
        handleCreateBook,
        handleDeleteBook,
        handleEditbook,
      }

    return (
        <BooksContext.Provider value={valueToShare}> 
            {children}
        </BooksContext.Provider>
    )
}

export {CustomProvider}
export default BooksContext

