import React, { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

const App_ = () => {
    const [books, setBooks] = useState([])

    const editBookById = (id, newTitle) => {
      const updatedBooks = books.map(book => {

        if (book.id === id) {
          return {
            ...book, title: newTitle
          }
          return book
        }

      })
      setBooks(updatedBooks)
    }

    const deleteBookById = (id) => {
      const updatedBooks = books.filter((book) => {
        return book.id !== id 
      })
      setBooks(updatedBooks)
    }

    const handleCreateBook = (title) => {
        
        const updatedBooks = [...books, {id: Math.random() * 999, title}]
        setBooks(updatedBooks)
    }

     
  return (
    <div>

        <div>
        <BookCreate onCreate={handleCreateBook} />
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}  />
        </div>

    </div>
  )
}

export default App_

